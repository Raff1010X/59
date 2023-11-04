import UseScroll from "@/hooks/useScroll";
import { useRef } from "react";
import style from "./scrollable.module.css";
import Image from "next/image";


interface ScrollableProps {
    className?: string,
    image: string,
    header: string,
    text: string,
    direction: "left" | "right"
}

export default function Scrollable(props: ScrollableProps) {
    const { className, image, header, text, direction } = props;

    const ref = useRef<HTMLDivElement>(null);

    const scroll = UseScroll({ ref });

    if (direction === "right") {
        return (
            <div className={style.wrapper} ref={ref}>
                <Image
                    src={image}
                    alt={header}
                    className={style.image}
                    width={1000}
                    height={1000}
                    style={{
                        left: 0,
                        transform: `translateX(${scroll / 9}%)`,
                        opacity: `${scroll}%`
                    }}
                />
                <div className={style.textWrapper}
                    style={{
                        left: '65%',
                        transform: `translateX(${-scroll / 7}%)`,
                        opacity: `${scroll}%`
                    }}
                >
                    <h1 className={style.header}>{header}</h1>
                    <p
                        className={style.text}
                        style={{
                            transform: `translateX(${100 - scroll}%)`,
                        }}
                    >
                        {text}
                    </p>
                </div>
                <div
                    className={style.mover}
                    style={{
                        left: '-45%',
                        transform: `translateX(${scroll/2}%) scaleX(${1 - scroll/100})`,
                    }} />
            </div>
        )
    } else {
        return (
            <div className={style.wrapper} ref={ref}>
                <Image
                    src={image}
                    alt={header}
                    className={style.image}
                    width={1000}
                    height={1000}
                    style={{
                        left: '55%',
                        transform: `translateX(${-scroll / 9}%)`,
                        opacity: `${scroll}%`
                    }}
                />
                <div className={style.textWrapper}
                    style={{
                        left: 0,
                        transform: `translateX(${scroll / 7}%)`,
                        opacity: `${scroll}%`,
                        alignItems: 'flex-end'
                    }}
                >
                    <h1
                        className={style.header}
                        style={{
                            textAlign: "right"
                        }}
                    >
                        {header}
                    </h1>
                    <p
                        className={style.text}
                        style={{
                            transform: `translateX(${-100 + scroll}%)`,
                            textAlign: "right"
                        }}
                    >
                        {text}
                    </p>
                </div>
                <div
                    className={style.mover}
                    style={{
                        left: '45%',
                        transform: `translateX(${-scroll / 2}%) scaleX(${1 - scroll/100})`,
                    }} />
            </div>
        )
    }
}