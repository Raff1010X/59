/* eslint-disable @next/next/no-img-element */
"use client"

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export default function Image(props: ImageProps) {
    const { src, alt } = props;
    return (

        <img
            src={src}
            alt={alt}
        />

    );
}