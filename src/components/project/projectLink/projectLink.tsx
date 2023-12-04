import Link from "next/link";
import { getCurrentProject, getNextProject } from "@/components/project/utils";
// import style from "./projectLink.module.css";

interface ProjectLinkProps {
    projectId: string;
    text: string;
}

export default function ProjectLink(params: ProjectLinkProps) {
    const { projectId, text } = params;

    const currentProject = getCurrentProject(projectId);
    const nextProject = getNextProject(currentProject);

    return (
        <Link href={`/projects/${nextProject.tag}/${nextProject.id}`}>
            <p>{nextProject.name}</p>
            <p>{text}</p>
        </Link>
    )
}
