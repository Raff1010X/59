"use client";

import Image from "next/image";
import findImageBase64 from "@/utils/imageBase64";
import { useEffect, useRef } from "react";

export default function Tester(props: any) {
    const { src } = props;
    const ref = useRef<HTMLImageElement>(null);

    let blurDataURL = findImageBase64(src);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.filter = 'blur(0px)';
        }

    }, []);

    return (
        <div>
            <Image
                ref={ref}
                src={src}
                alt='logo'
                width={1500}
                height={1000}
                placeholder='blur'
                blurDataURL={blurDataURL}
                style={{ filter: 'blur(20px)', transition: 'filter 0.5s' }}
                unoptimized
            />
        </div>
    )
}