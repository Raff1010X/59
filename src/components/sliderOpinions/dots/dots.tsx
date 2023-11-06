"use client";
import { useEffect, useRef } from 'react';
import style from './dots.module.css';

interface DotsProps {
    className?: string;
    numberOfDots: number;
    selected: number;
    setSelected: (id: number) => void;
}

export default function Dots(props: DotsProps) {
    const { className, numberOfDots, selected, setSelected } = props;

    const dots = [];

    const mover = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mover.current) {
            mover.current.style.transform = `translateX(${(selected) * 20}px)`;
        }
    }, [numberOfDots, selected]);

    for (let i = 0; i < numberOfDots; i++) {
        dots.push(
            <div
                key={i}
                className={`${style.dot} ${selected === i ? style.selected : ''}`}
                onClick={() => setSelected(i)}
            />
        );
    }

    return (
        <div className={`${style.wrapper} ${className}`}>
            <div className={style.dots}>
                <div className={`${style.dot} ${style.mover}`} ref={mover} />
                {dots}
            </div>
        </div>
    );
}
