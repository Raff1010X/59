import { useRef } from "react";
import style from "./bannerText.module.css";
import useAnimate from "@/hooks/useAnimate";

interface BannerTextProps {
    number: number,
    step: number,
    afterNumber?: string,
    header: string[],
    text: string[],
    className?: string,
}

export default function BannerText(props: BannerTextProps) {
    const { number, step, afterNumber, header, text, className } = props;

    const ref = useRef<HTMLDivElement>(null);

    useAnimate({ ref, className: style.animate });

    return (
        <div className={`${style.wrapper} ${className}`}>

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
                <div className={style.texts}>
                    {text?.map((text, index) => (
                        <div key={index} className={style.text}>{text}</div>
                    ))}
                </div>
            </div>

        </div>
    )

}