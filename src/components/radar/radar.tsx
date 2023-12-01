"use client"
import { useEffect } from 'react';
import style from './radar.module.css';
import sync from '@/utils/sync'

interface RadarProps {
    className?: string;
}

export default function Radar(props: RadarProps) {
    const { className } = props;

    useEffect(() => {
        sync(['rotate', 'dotBlink'])
    }, [])
    
    return (
        <div className={`${style.wrapper} ${className && className}`}>
            <div className={style.radar}>
                <div className={`${style.circle} ${style.circle1}`}></div>
                <div className={`${style.circle} ${style.circle2}`}></div>
                <div className={`${style.circle} ${style.circle3}`}></div>
                <div className={`${style.line} ${style.line1}`}></div>
                <div className={`${style.line} ${style.line2}`}></div>
                <div className={`${style.radarLine}`}></div>
                <div className={`${style.dot} ${style.dot1}`}></div>
                <div className={`${style.dot} ${style.dot2}`}></div>
                <div className={`${style.dot} ${style.dot3}`}></div>
                <div className={`${style.dot} ${style.dot4}`}></div>
                <div className={`${style.dot} ${style.dot5}`}></div>
                <div className={`${style.dot} ${style.dot6}`}></div>
                <div className={`${style.dot} ${style.dot7}`}></div>
                <div className={`${style.dot} ${style.dot8}`}></div>
                <div className={`${style.dot} ${style.dot9}`}></div>
                <div className={`${style.dot} ${style.dot10}`}></div>
                <div className={`${style.dot} ${style.dot11}`}></div>
                <div className={`${style.dot} ${style.dot12}`}></div>
            </div>
        </div>
    );
}