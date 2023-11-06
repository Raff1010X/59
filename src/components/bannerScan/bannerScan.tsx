"use client"
import { useRef } from "react";
import style from "./bannerScan.module.css";
import useAnimate from "@/hooks/useAnimate";

interface BannerScanProps {
    header: string[],
    className?: string,
}

export default function BannerScan(props: BannerScanProps) {
    const { header, className } = props;

    const ref = useRef<HTMLDivElement>(null);

    useAnimate({ ref: ref, className: style.animate });

    return (
        <div className={`${style.wrapper} ${className}`}>

            <video className={style.video} autoPlay loop muted playsInline>
                <source src="/images/scaner.mp4" type="video/mp4" />
            </video>

            <div className={style.headers}>
                {header?.map((text, index) => (
                    <div key={index} className={style.header}>{text}</div>
                ))}
            </div>

        </div>
    )

}