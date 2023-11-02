"use client"
import { useEffect, useRef, useState } from "react";
import style from "./bannerNum.module.css";
import useAnimate from "@/hooks/useAnimate";

interface BannerNumProps {
    number: number,
    frontText?: string[],
    className?: string,
    afterText?: string,
    step: number
}

export default function BannerNum(props: BannerNumProps) {
    const { className, frontText, number, afterText, step } = props;

    const numberWrapperRef = useRef<HTMLDivElement>(null);

    useAnimate({ ref: numberWrapperRef, className: style.animate });

    return (
        <div className={`${style.wrapper} ${className}`}>

            <div className={style.numbers}>
                <div className={style.numberWrapper} ref={numberWrapperRef}>
                    {Array.from(Array(Math.floor(number / step) + 1).keys()).map((num, index) => (
                        <div key={index} className={style.number}>{num * step}{afterText}</div>
                    ))}
                </div>
            </div>


            <div className={style.frontTexts}>
                {frontText?.map((text, index) => (
                    <div key={index} className={style.frontText}>{text}</div>
                ))}
            </div>
        </div>
    )

}