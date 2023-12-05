"use client"
import { useRef } from "react";
import style from "./bannerScan.module.css";
import useAnimate from "@/hooks/useAnimate";
import Radar from "../radar/radar";

interface BannerScanProps {
    header: string[],
    className?: string,
}

export default function BannerScan(props: BannerScanProps) {
    const { header, className } = props;

    const ref = useRef<HTMLDivElement>(null);

    useAnimate({ ref, className: style.animate });

    return (
        <div className={`container_medium ${style.wrapper} ${className && className}`}>

            <Radar className={style.radar}/>

            <div className={style.headers}>
                {header?.map((text, index) => (
                    <div key={index} className={style.header}>{text}</div>
                ))}
            </div>

        </div>
    )

}