"use client"
import { useRef } from 'react';
import style from './video.module.css';
import Image from 'next/image';
import Arrow from '../arrow/arrow';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface VideoProps {
    src: string;
    image: string | StaticImport;
    className?: string;
}

export default function Video(props: VideoProps) {
    const { src, image, className } = props;
    const videoRef = useRef<HTMLVideoElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const handlePlay = () => {
        videoRef.current?.play();
        buttonRef.current?.classList.add(style.hide);
        imageRef.current?.classList.add(style.hide);
    };

    return (
        <div className={`${style.wrapper} ${className}`}>
            <video
                ref={videoRef}
                className={style.video}
                controls={false}
                loop
            >
                <source src={src} />
            </video>
            <Image
                ref={imageRef}
                className={style.image} 
                src={image}
                alt="video"
                priority={false}
                />
            <button
                ref={buttonRef}
                className={style.button}
                onClick={handlePlay}>
                <Arrow className={style.arrow} />
            </button>
        </div>
    );
}