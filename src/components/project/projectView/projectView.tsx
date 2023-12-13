import { getCurrentProject } from "@/components/project/utils";
import style from "./projectView.module.css";
import Image from "@/components/image/image";
import Images from "./images";

export default function ProjectView(params: { projectId: string }) {
    const { projectId } = params;

    const currentProject = getCurrentProject(projectId);

    return (
        <section className={`container_medium ${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.texts}>
                    <p className={style.name}>{currentProject.name}</p>
                    <p className={style.shortDescription}>{currentProject.shortDescription}</p>
                    <p className={style.description}>{currentProject.description}</p>
                </div>
                {currentProject.scope &&
                    <div className={style.scope}>
                        <div className={style.scopeHeader}>
                            <p>ZAKRES PRAC:</p>
                            <span>|</span>
                            <p>{currentProject.scope.length}</p>
                        </div>
                        {currentProject.scope.map((scope, index) => (
                            <div key={index} className={style.scopeItem}>
                                <Image
                                    key={index}
                                    src={`/images/scope/${scope}.webp`}
                                    alt={scope}
                                    width={100}
                                    className={style.scopeImage}
                                />
                                <p className={style.scopeText}>{scope}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className={style.images}>
                {currentProject.media && 
                    <Images media={currentProject.media} />
                
                
                // currentProject.media.map((image, index) => {

                //     if (image.includes(".webp")) {
                //         return <Image
                //             key={index}
                //             src={image}
                //             alt=""
                //             width={1000}
                //             className={style.image}
                //         />
                //     }

                //     if (image.includes(".mp4")) {
                //         return <video
                //             key={index}
                //             src={image}
                //             autoPlay
                //             muted
                //             loop
                //             playsInline
                //             className={style.video}
                //         />
                //     }

                // })
                }
            </div>
        </section>
    )
}

