import projects from "@/data/projects.json";
import { Project } from "@/components/projectList/projectItem";

export async function generateStaticParams() {
    return projects
}

export default function Project({ params }: { params: Project }) {
    const { id, name, shortDescription, description, aspectRatio, image, video, selected, media, tag } = params;

    return (
        <div>
            <h1>ProjectsPage {id}</h1>
        </div>
    )
}