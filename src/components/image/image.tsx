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
    src: string; // original image path with any extension - will be converted to webp with different sizes
    alt: string;
    width?: number; // width of the original image if < widths[0] then use the original image name without any changes
    size?: number; // size of image on screen: 1-full, 2-half, 3-third, 4-quarter of the screen
    blur?: boolean; // show blur image
    onClick?: () => void;
}

const Image = React.forwardRef((props: ImageProps, ref: React.Ref<HTMLDivElement>) => {
    const { src, alt, className, width, style, onClick, blur = true, size = 2 } = props;

    const divBlur = useRef<HTMLImageElement>(null);

    let srcFileName = src.replace(/\.[^/.]+$/, "");
    let blurDataURL = findImageBase64(srcFileName);
    let srcBase = `${srcFileName}-${widths[3]}.webp`;

    let sizes = `(max-width: ${widths[1]}px) ${widths[0] / size}px,
                (max-width: ${widths[2]}px) ${widths[1] / size}px,
                (max-width: ${widths[3]}px) ${widths[2] / size}px,
                ${widths[3] / size}px`;

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
            {
                blur &&
                <img ref={divBlur}
                    src={blurDataURL}
                    className={styles.blur}
                    style={{
                        transition: 'opacity 0.5s',
                        opacity: '1',
                    }}
                    alt={''}
                />
            }
        </ div>
    );
})

Image.displayName = 'Image';

export default Image;