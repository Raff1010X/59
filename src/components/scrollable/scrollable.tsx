import UseScroll from "@/hooks/useScroll";
import { useRef } from "react";
import style from "./scrollable.module.css";

interface ScrollableProps {
    className?: string
}

export default function Scrollable(props: ScrollableProps) {
    const { className } = props;

    const ref = useRef<HTMLDivElement>(null);

    const scroll = UseScroll({ ref });



    return (
        <div className={style.wrapper} ref={ref}>
            <div className={style.mover} style={{ left: `${scroll / 2}vw`, width: `${(100/3 - scroll/3 >= 1) ? 100/3 - scroll/3 : 0}vw`}} />
        </div>
    )
}