"use client"
import useScroll from "@/hooks/useScroll";
import { useRef } from "react";
import style from "./scrollable.module.css";
import Image from '../image/image'
import { CSSProperties } from "react";


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

    const scroll = useScroll({ ref });

    const opacity = Math.pow(scroll / 100, 2);

    const styleRight = {
        image: {
            left: '-10%',
            transform: `translateX(${scroll / 3}%)`,
        },
        textWrapper: {
            left: '65%',
            transform: `translateX(${-scroll / 7}%)`,
        },
        header: {
            textAlign: "left"
        },
        text: {
            transform: `translateX(${100 - scroll}%)`,
        },
        mover: {
            left: '-65%',
            transform: `translateX(${scroll / 1.54}%) scaleX(${1 - scroll / 100})`,
        }
    }
    const styleLeft = {
        image: {
            left: '65%',
            transform: `translateX(${-scroll / 3}%)`,
        },
        textWrapper: {
            left: 0,
            transform: `translateX(${scroll / 7}%)`,
            alignItems: 'flex-end'
        },
        header: {
            textAlign: "right"
        },
        text: {
            transform: `translateX(${-100 + scroll}%)`,
            textAlign: "right"
        },
        mover: {
            left: '65%',
            transform: `translateX(${-scroll / 1.54}%) scaleX(${1 - scroll / 100})`,
        }
    }

    let styles = direction === "right" ? styleRight : styleLeft;

    return (
        <div className={style.wrapper} ref={ref}>
            <div className={style.extender}>
                <Image
                    src={image}
                    alt={header}
                    className={style.image}
                    width={600}
                    height={600}
                    style={{ ...styles.image, opacity }}
                />
                <div className={style.textWrapper}
                    style={{ ...styles.textWrapper, opacity }}
                >
                    <h1
                        className={style.header}
                        style={styles.header as CSSProperties}
                    >{header}</h1>
                    <p
                        className={style.text}
                        style={styles.text as CSSProperties}
                    >
                        {text}
                    </p>
                </div>
                <div
                    className={style.mover}
                    style={styles.mover}
                />

            </div>
        </div>
    )
}