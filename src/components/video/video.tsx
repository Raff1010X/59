"use client"
import { useEffect, useRef, useState } from 'react';
import style from './video.module.css';
// import { ImageNextNoSRR } from '@/components/image/imageNoSRR';
import Image from '@/components/image/image';

import Arrow from '../arrow/arrow';
interface VideoProps {
    src: string;
    image: string;
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
            {/* <ImageNextNoSRR
                // ref={imageRef}
                className={style.image}
                src={image}
                width={1800}
                height={900}
                alt="video"
            /> */}
            <Image
                // ref={imageRef}
                className={style.image}
                src={image}
                width={1800}
                height={900}
                alt="video"
            />

            <button
                aria-label='play video'
                type='button'
                ref={buttonRef}
                className={style.button}
                onClick={handlePlay}>
                <Arrow className={style.arrow} />
            </button>
        </div>
    );
}