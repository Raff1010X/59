import { Project } from "@/components/project/projectItem/projectItem";
import projects from "@/data/projects.json";
import Button from "@/components/button/button"
import style from './projectGroupLinks.module.css'
import Link from "next/link";

interface ProjectgGroupLinksProps {
    selectedTag: string;
}

export const ProjectGroupLinks = (props: ProjectgGroupLinksProps) => {
    const { selectedTag } = props;

    // Tworzy listę unikalnych tagów z projektów.
    const tags = projects.map((project: Project) => project.tag);
    const uniqueTags = tags.filter((tag, index, array) => array.indexOf(tag) === index);

    return (
        <div className={style.wrapper}>
            <p className={style.title}>
                portfolio
            </p>
            <div className={style.buttons}>
                {uniqueTags.map((tag) => (
                    <Link href={`/projects/${tag}`} key={tag} >
                        <Button
                            selected={selectedTag === tag}
                            className={style.button}
                        >
                            {tag}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    )
}