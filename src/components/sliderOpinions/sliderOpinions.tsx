"use client";
import { useEffect, useState } from 'react';
import style from './sliderOpinions.module.css';
import Button from '../button/button';
import Arrow from '../arrow/arrow';
import Dots from './dots/dots';
import Slide from './slide/slide';
import Loader from './loader/loader';
import Image from 'next/image'

interface SliderOpinionsProps {
    styleName?: string;
    title?: string;
    data: {
        id: number;
        name: string;
        role: string;
        foto: string;
        logo: string;
        opinion: string;
    }[];
}

const initialState = {
    selected: 0,
    width: 0,
    touchStart: 0,
    loading: true,
}

export default function SliderOpinions(props: SliderOpinionsProps) {
    const { styleName, title, data } = props;

    const [state, setState] = useState(initialState);

    const next = () => {
        if (state.selected === data.length - 1) {
            setState((state) => ({
                ...state,
                selected: 0,
            }));
        } else {
            setState((state) => ({
                ...state,
                selected: state.selected + 1,
            }));
        }
    }

    const prev = () => {
        if (state.selected === 0) {
            setState((state) => ({
                ...state,
                selected: data.length - 1,
            }));
        } else {
            setState((state) => ({
                ...state,
                selected: state.selected - 1,
            }));
        }
    }

    const setSelected = (selected: number) => {
        setState((state) => ({
            ...state,
            selected,
        }));
    }

    useEffect(() => {
        const redrawSlider = () => {
            const width = window.innerWidth >= 1430 ? 1 : 0;
            setState((state) => ({
                ...state,
                selected: 0,
                width,
                loading: false,
            }));
        }
        redrawSlider();
        window.addEventListener('resize', redrawSlider);
        return () => window.removeEventListener('resize', redrawSlider);
    }, []);

    // Auto change slide
    useEffect(() => {
        const interval = setInterval(() => {
            if (state.selected === data.length - 1 - state.width) {
                setState((state) => ({
                    ...state,
                    selected: 0,
                }));
            } else {
                setState((state) => ({
                    ...state,
                    selected: state.selected + 1,
                    touchStart: 1,
                }));
            }
        }, 15000);
        return () => clearInterval(interval);
    }, [data.length, state.selected, state.width]);

    // increase selected on right to left touch move if touch move is more than 50px
    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setState((state) => ({
            ...state,
            touchStart: e.touches[0].clientX,
        }));
    }

    const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchEnd = e.changedTouches[0].clientX;
        if (touchEnd - state.touchStart > 50) {
            prev();
        } else if (touchEnd - state.touchStart < -50) {
            next();
        }
    }


    return (
        <div
            className={`${style.wrapper} ${styleName}`}
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
        >

            <div className={style.title}>
                {title}
            </div>

            <div className={style.container}>

                {state.loading
                    ? <Loader />
                    : <Slide className={style.slider} data={data} selected={state.selected} width={state.width === 0 ? 100 : 47.6} />}


                <Button
                    className={style.buttonRight}
                    onClick={next}
                    selected
                    styles={
                        state.selected < data.length - 1 - state.width && !state.loading
                            ? { opacity: 1, pointerEvents: 'all' }
                            : { opacity: 0, pointerEvents: 'none' }
                    }
                >
                    <Arrow />
                </Button>

                <Button
                    className={style.buttonLeft}
                    onClick={prev}
                    selected
                    styles={
                        state.selected > 0 && !state.loading
                            ? { opacity: 1, pointerEvents: 'all' }
                            : { opacity: 0, pointerEvents: 'none' }
                    }
                >
                    <Arrow className={style.arrowLeft} />
                </Button>

            </div>

            {state.loading
                ? <div className={style.dots} />
                : <Dots numberOfDots={data.length - state.width} selected={state.selected} setSelected={setSelected} />
            }
            <Image
                src="/images/slideropinions/swipe.png"
                alt="swipe"
                className={style.swipe}
                width={100}
                height={100}
                style={{
                    opacity:
                        state.touchStart === 0 &&
                            state.selected === 0 &&
                            !state.loading
                            ? 1
                            : 0
                }}
            />
        </div>
    )
}
