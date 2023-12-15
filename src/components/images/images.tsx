"use client";
import { Controller, Scene } from 'react-scrollmagic';
import Image from '../image/image';
import style from './images.module.css';

export default function Images(props: { media: string[]; }) {
    const media = props.media;

    return (
        <div>
            XXXXXX
            <Controller>
                {media.map((image, index) => (
                    <Scene key={index} triggerHook="onLeave" duration={1000}>
                        {(progress: number) => 
                            {
                                console.log(progress);
                            return <div style={{ opacity: progress }}>
                                <Image
                                    src={image}
                                    alt=""
                                    width={1000}
                                    className={style.image}
                                />
                            </div>
                        }
                    }
                    </Scene>
                ))}
            </Controller>
        </div>
    );
}