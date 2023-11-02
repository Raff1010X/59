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
                        left: `${- 7 + scroll / 6}%`,
                        opacity: `${scroll}%`
                    }}
                />
                <div className={style.textWrapper}
                    style={{
                        left: `${85 - scroll / 4}%`,
                        opacity: `${scroll}%`
                    }}
                >
                    <h1 className={style.header}>{header}</h1>
                    <p
                        className={style.text}
                        style={{
                            margin: `${20 - scroll / 5}%`
                        }}
                    >
                        {text}
                    </p>
                </div>
                <div
                    className={style.mover}
                    style={{
                        left: `${5 + scroll / 2 + 3 + (scroll - 100) / 4}%`,
                        width: `${109 / 4 - (scroll + 10) / 4 + (101 - scroll) / 4}%`
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
                        left: `${70 - scroll / 5}%`,
                        opacity: `${scroll}%`
                    }}
                />
                <div className={style.textWrapper}
                    style={{
                        left: `${scroll / 6}%`,
                        opacity: `${scroll}%`
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
                            marginLeft: `${-20 + scroll / 5}%`,
                            marginTop: `${20 - scroll / 5}%`,
                            textAlign: "right"
                        }}
                    >
                        {text}
                    </p>
                </div>
                <div
                    className={style.mover}
                    style={{
                        left: `${65 - scroll / 4}%`,
                        width: `${109 / 3 - (scroll + 10) / 3 + (101 - scroll) / 3}%`
                    }} />
            </div>
        )
    }
}