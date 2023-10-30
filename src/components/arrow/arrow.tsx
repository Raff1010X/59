import { LegacyRef } from 'react';
import style from './arrow.module.css'

interface ArrowProps {
    className?: string;

}

export default function Arrow(props: ArrowProps) {
    const { className } = props
    return <span className={`${style.arrow} ${className}`}></span>
}