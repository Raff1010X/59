import Link from 'next/link'
import Button from "@/components/button/button"
import Arrow from "@/components/arrow/arrow"
import style from './projectShowAll.module.css'


export const ProjectShowAll = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <p className={style.title}>
                    wybrane projekty
                </p>
                <Link href="/projects" >
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