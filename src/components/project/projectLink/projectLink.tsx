import Link from "next/link";
import { getCurrentProject, getNextProject } from "@/components/project/utils";
import style from "./projectLink.module.css";
import Arrow from "@/components/arrow/arrow";

interface ProjectLinkProps {
    projectId: string;
    text: string;
}

export default function ProjectLink(params: ProjectLinkProps) {
    const { projectId, text } = params;

    const currentProject = getCurrentProject(projectId);
    const nextProject = getNextProject(currentProject);

    return (
        <div className={`container_medium ${style.wrapper}`}>
            <Link href={`/projects/${encodeURIComponent(nextProject.tag)}/${nextProject.id}`} className={style.link}>
                <p className={style.name}>{nextProject.name}</p>
                <div className={style.text}>
                    <div>{text}</div>
                    <div className={style.linkArrowBackground}>
                        <Arrow className={style.arrow} />
                    </div>
                </div>
            </Link>
        </div>
    )
}
