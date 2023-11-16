/* eslint-disable @next/next/no-img-element */
"use client";
import findImageBase64 from "@/utils/imageBase64";
import { useEffect, useRef } from "react";
import styles from "./image.module.css";
import React from "react";

interface ImageProps {
    className?: string;
    style?: React.CSSProperties;
    src: string;
    alt: string;
    width?: number;
    onClick?: () => void;
    blur?: boolean;
}

const Image = React.forwardRef((props: ImageProps, ref: React.Ref<HTMLDivElement>) => {
    const { src, alt, className, width, style, onClick, blur = true } = props;
    const divBlur = useRef<HTMLImageElement>(null);

    let srcFileName = src.replace(/\.[^/.]+$/, "");

    let blurDataURL = findImageBase64(srcFileName);

    let blurStyle = {
        transition: 'opacity 0.5s',
        opacity: '1',
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
            divBlur.current.style.opacity = '0';
    }, []);

    return (
        <div ref={ref} className={`${styles.wrapper} ${className}`} style={style}>
            <img
                src={srcBase}
                alt={alt}
                srcSet={srcSet}
                sizes={sizes}
                loading="lazy"
                className={styles.image}
                onClick={onClick}
            />
            {blur &&
                <img ref={divBlur}
                    src={blurDataURL}
                    className={styles.blur}
                    style={blurStyle}
                    alt={''}
                />}
        </ div>
    );
})

Image.displayName = 'Image';

export default Image;