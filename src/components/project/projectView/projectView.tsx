"use client";
import { getCurrentProject } from "@/components/project/utils";

import style from "./projectView.module.css";
import Image from "@/components/image/image";




export default function ProjectView(params: { projectId: string }) {
    const { projectId } = params;

    const currentProject = getCurrentProject(projectId);

    return (
        <section className={`container_medium ${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.texts}>
                    <p>{currentProject.name}</p>
                    <p>{currentProject.description}</p>
                    <p>{currentProject.tag}</p>
                </div>
                <div className={style.scope}>
                    {currentProject.scope && currentProject.scope.map((scope, index) => (
                        <div key={index} className={style.scopeItem}>
                            <p>{scope}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.images}>
                {currentProject.media && currentProject.media.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={currentProject.name}
                        width={1000}
                    />
                ))}
            </div>
        </section>
    )
}

