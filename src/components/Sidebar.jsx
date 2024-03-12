import Button from "./Button"

export default function Sidebar({ onStartAddProject, projects }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul>
                {projects.map(project => (
                    <li key={project.id} className="flex items-center justify-between gap-4 my-4">
                        <span>{project.title}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}