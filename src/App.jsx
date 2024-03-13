import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjectsState((prevState) => {
      const taskId = prevState.tasks.length + 1;
      const newTask = {
        text: task,
        id: taskId,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
    }

    function handleDeleteTask(id) {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter(task => task.id !== id),
        };
      })
    }

  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  function handleAddData(project) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, {
          id: projectsState.projects.length + 1,
          ...project
        }]
      }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
      };
    });
  }

  let content;
  
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleAddData} onCancel={handleCancelProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else {
    const projectData = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
    content = <SelectedProject project={projectData} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
      onStartAddProject={handleStartAddProject}
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
