"use client"
import { useRef } from 'react';
import style from './video.module.css';
import { ImageNoSRR } from '@/components/image';
import base64blurTXT from '../../assets/images/base64.txt';

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
            <ImageNoSRR
                // ref={imageRef}
                className={style.image}
                src={image}
                width={1800}
                height={900}
                alt="video"
                blurDataURL={base64blurTXT}
                placeholder='blur'
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