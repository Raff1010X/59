import projects from "@/data/projects.json";
import { Project } from "@/components/projectList/projectItem";

export const generateStaticParams = () => projects

function getNextProject(currentProject: Project, allProjects: Project[]): Project {
    const filteredProjects = allProjects.filter(project => project.tag === currentProject.tag);
    const currentIndex = filteredProjects.findIndex(project => project.id === currentProject.id);
    const nextIndex = (currentIndex < filteredProjects.length - 1) ? currentIndex + 1 : 0;
    return filteredProjects[nextIndex];
}

export default function Project({ params }: { params: Project }) {
    const { id } = params;
    
    const currentProject = projects.find(project => project.id === id) as Project;
    const nextProject = getNextProject(currentProject, projects);
    
    return (
        <div>
            <h1>Projects  Page {id}</h1>
            <h1>{currentProject.name}</h1>
            <h1>{currentProject.shortDescription}</h1>
            <h1>{currentProject.description}</h1>
            <h1>{currentProject.aspectRatio}</h1>
            <h1>{currentProject.image}</h1>
            <h1>{currentProject.video}</h1>
            <h1>{currentProject.selected}</h1>
            <h1>{currentProject.media}</h1>
            <h1>{currentProject.tag}</h1>
            <p>{nextProject.id}</p>
            <p>{nextProject.name}</p>
            <p>{nextProject.description}</p>
            <p>{nextProject.aspectRatio}</p>
            <p>{nextProject.image}</p>
            <p>{nextProject.video}</p>
            <p>{nextProject.selected}</p>
            <p>{nextProject.media}</p>
            <p>{nextProject.tag}</p>
        </div>
    )
}