"use client";
import Image from "next/image";
import logo from "@/assets/images/logo_sm.svg";

import style from './banner.module.css';
import { useRef } from "react";
import useAnimate from "@/hooks/useAnimate";

type BannerProps = {
    className?: string;
    backText?: string[];
    frontText?: string[];
}

export default function Banner(props: BannerProps) {
    const { className, backText, frontText } = props;
    const ref = useRef<HTMLDivElement>(null);

    const texts = frontText?.join("\u00A0").replace(/i /g, "i\u00A0").split("NOTHING");

    const text = texts?.map((text, index) => (
        <div key={index} className={style.frontText}>{
            text.split("").map((letter, index) => (
                <span key={index}>{letter}</span>
            ))
        }</div>
    ));

    const callbackFunction: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        const spans = ref.current?.querySelectorAll("span");
        if (entry.isIntersecting) {
            spans?.forEach((span, index) => {
                span.style.animationDelay = `${index * 0.02 + Math.random()}s`;
                span.classList.add(style.spanAnimation);
            });
        } else 
            spans?.forEach((span) => span.classList.remove(style.spanAnimation));
    }
    useAnimate({ ref, callback: () => callbackFunction });

    return (
        <div className={`${style.wrapper} ${className && className}`}>

            <div className={style.backTexts}>
                {backText?.map((text, index) => (
                    <div key={index} className={style.backText}>{text}</div>
                ))}
            </div>

            <div className={style.frontTexts} ref={ref}>
                {text}
            </div>

            <div className={style.logo}>
                <Image src={logo} alt="logo" priority={false} className={style.image} unoptimized/>
            </div>
        </div>
    )

}
