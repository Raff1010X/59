"use client"
import style from './burger.module.css';

type BurgerProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    className?: string;
}

export const Burger = (props: BurgerProps) => {
    const { open, setOpen, className } = props;
    return (
        <div className={`${style.burger} ${open ? style.open : ''} ${className}`} onClick={() => setOpen(!open)}>
            <div className={`${style.line} ${style.top} ${open ? style.opentop : ''}`}></div>
            <div className={`${style.line} ${style.bottom} ${open ? style.openbottom : ''}`}></div>
        </div>
    );
};