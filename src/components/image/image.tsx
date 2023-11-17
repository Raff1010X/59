/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import findImageBase64 from "@/utils/imageBase64";
import { useEffect, useRef } from "react";
import styles from "./image.module.css";

import widths from "@/utils/imagesWidths";

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

    let srcBase = `${srcFileName}-${widths[3]}.webp`;

    let sizes = `(max-width: ${widths[1]}px) ${widths[0]}px,
                (max-width: ${widths[2]}px) ${widths[1]}px,
                (max-width: ${widths[3]}px) ${widths[2]}px,
                ${widths[3]}px`;

    let srcSet = `${srcFileName}-${widths[0]}.webp ${widths[0]}w, 
                ${srcFileName}-${widths[1]}.webp ${widths[1]}w, 
                ${srcFileName}-${widths[2]}.webp ${widths[2]}w, 
                ${srcFileName}-${widths[3]}.webp ${widths[3]}w`;

    if (width! < widths[0]) {
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