/* eslint-disable @next/next/no-img-element */
"use client"
import findImageBase64 from "@/utils/imageBase64";

interface ImageProps {
    className?: string;
    style?: React.CSSProperties;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    onClick?: () => void;
}

export default function Image(props: ImageProps) {
    const { src, alt, className, width, height, style, onClick } = props;

    let srcFileName = src.replace(/\.[^/.]+$/, "");

    const blurDataURL = findImageBase64(srcFileName);

    let srcBase = `${srcFileName}-1200.webp`;
    let sizes = '(max-width: 600px) 300px, (max-width: 900px) 600px, (max-width: 1200px) 900px, 1200px';
    let srcSet = `${srcFileName}-300.webp 300w, ${srcFileName}-600.webp 600w, ${srcFileName}-900.webp 900w, ${srcFileName}-1200.webp 1200w`;
    if (width! < 300) {
        srcBase = `${srcFileName}.webp`;
        sizes = '';
        srcSet = '';
    }

    return (
        <div className="image-container" style={style}>
            <img
                className={className}
                src={srcBase}
                alt={alt}
                srcSet={srcSet}
                sizes={sizes}
                width={width}
                height={height}
                loading="lazy"
                onClick={onClick}
            />
        </div>
    );
}