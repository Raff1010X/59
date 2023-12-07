import Link from 'next/link'
import Button from "@/components/button/button"
import Arrow from "@/components/arrow/arrow"
import style from './projectShowAll.module.css'
import { uniqueTags } from '../utils'


export const ProjectShowAll = () => {

    return (
        <div className={`container_medium ${style.wrapper}`}>
            <div className={style.header}>
                <p className={style.title}>
                    wybrane projekty
                </p>
                <Link href={`/projects/${uniqueTags[0]}`} >
                    <Button
                        selected
                        className={style.button}
                    >
                        zobacz całe portfolio
                        <Arrow className={style.arrowButton} />
                    </Button>
                </Link>
            </div>
        </div>
    )
}