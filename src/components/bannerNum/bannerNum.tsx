"use client"
import { useRef } from "react";
import style from "./bannerNum.module.css";
import useAnimate from "@/hooks/useAnimate";

interface BannerNumProps {
    number: number,
    step: number,
    afterNumber?: string,
    header: string[],
    className?: string,
}

export default function BannerNum(props: BannerNumProps) {
    const { number, step, afterNumber, header, className } = props;

    const ref = useRef<HTMLDivElement>(null);

    useAnimate({ ref: ref, className: style.animate });

    return (
        <div className={`container_medium ${style.wrapper} ${className && className}`}>

            <div className={style.numbers}>
                <div className={style.numberWrapper} ref={ref}>
                    {Array.from(Array(Math.floor(number / step) + 1).keys()).map((num, index) => (
                        <div key={index} className={style.number}>{num * step < 10 && '0'}{num * step}{afterNumber}</div>
                    ))}
                </div>
            </div>
            <div className={style.numbersCover} ></div>

            <div className={style.headers}>
                {header?.map((text, index) => (
                    <div key={index} className={style.header}>{text}</div>
                ))}
            </div>

        </div>
    )

}