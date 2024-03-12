import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddData({ title, description, dueDate }) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, {
          id: projectsState.projects.length + 1,
          title,
          description,
          dueDate
        }]
      }
    })
    console.log(projectsState.projects);
  }

  let content;
  
  if(projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleAddData}/>
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
