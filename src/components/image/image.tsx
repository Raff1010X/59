/* eslint-disable @next/next/no-img-element */
"use client";
import findImageBase64 from "@/utils/imageBase64";
import { useEffect, useRef } from "react";

interface ImageProps {
    ref?: React.Ref<HTMLImageElement>;
    className?: string;
    style?: React.CSSProperties;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    onClick?: () => void;
}

export default function Image(props: ImageProps) {
    const { ref, src, alt, className, width, height, style, onClick } = props;
    const divBlur = useRef<HTMLDivElement>(null);

    let srcFileName = src.replace(/\.[^/.]+$/, "");

    let blurDataURL = findImageBase64(srcFileName);

    let blurStyle = {
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'opacity 0.5s',
    };

    let srcBase = `${srcFileName}-1200.webp`;

    let sizes = `(max-width: 600px) 300px,
                (max-width: 900px) 600px,
                (max-width: 1200px) 900px,
                1200px`;

    let srcSet = `${srcFileName}-300.webp 300w, 
                ${srcFileName}-600.webp 600w, 
                ${srcFileName}-900.webp 900w, 
                ${srcFileName}-1200.webp 1200w`;

    if (width! < 300) {
        srcBase = `${srcFileName}.webp`;
        sizes = '';
        srcSet = '';
    }

    useEffect(() => {
        if (divBlur.current)
            divBlur.current.style.opacity = '0 !important';
    }, []);

    return (
        <>
            <img
                src={srcBase}
                alt={alt}
                srcSet={srcSet}
                sizes={sizes}
                loading="lazy"
                className={className}
                style={style}
                onClick={onClick}
            />
            <div ref={divBlur}
                className={className}
                style={{ ...style, ...blurStyle}}
            />
        </>
    );
}