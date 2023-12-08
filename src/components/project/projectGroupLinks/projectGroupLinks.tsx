import Button from "@/components/button/button"
import style from './projectGroupLinks.module.css'
import Link from "next/link";
import { uniqueTags } from "@/components/project/utils";

interface ProjectgGroupLinksProps {
    selectedTag: string;
}

export const ProjectGroupLinks = (props: ProjectgGroupLinksProps) => {
    const { selectedTag } = props;

    return (
        <div className={`container_medium ${style.wrapper}`}>
            <p className={style.title}>
                portfolio
            </p>
            <div className={style.buttons}>
                {uniqueTags.map((tag) => (
                    <Link href={`/projects/${encodeURIComponent(tag)}`} key={tag} >
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