import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './sliderOpinions.module.css';
import Button from '../button/button';
import Arrow from '../arrow/arrow';
import Dots from './dots/dots';
import Slider from './slider/slider';
import Loader from './loader/loader';
// import dynamic from 'next/dynamic'
// const Slider = dynamic(() => import('./slider/slider'), { ssr: false })
// const Dots = dynamic(() => import('./dots/dots'), { ssr: false })

interface SliderOpinionsProps {
    styleName?: string;
    title?: string;
}

const initialState = {
    selected: 0,
    width: 2,
    touchStart: 0,
}

export default function SliderOpinions(props: SliderOpinionsProps) {
    const { styleName, title } = props;

    const [state, setState] = useState(initialState);

    const next = () => {
        if (state.selected === opinions.length - 1) {
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
                selected: opinions.length - 1,
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
            }));
        }
        redrawSlider();
        window.addEventListener('resize', redrawSlider);
        return () => window.removeEventListener('resize', redrawSlider);
    }, []);

    // Auto change slide
    useEffect(() => {
        const interval = setInterval(() => {
            if (state.selected === opinions.length - 1 - state.width) {
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
        }, 5000);
        return () => clearInterval(interval);
    }, [state.selected, state.width]);

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

                {state.width === 2
                    ? <Loader />
                    : <Slider className={style.slider} data={opinions} selected={state.selected} width={state.width === 0 ? 99.75 : 49.75} />}


                <Button
                    className={style.buttonRight}
                    onClick={next}
                    selected
                    styles={
                        state.selected < opinions.length - 1 - state.width && state.width !== 2
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
                        state.selected > 0 && state.width !== 2
                            ? { opacity: 1, pointerEvents: 'all' }
                            : { opacity: 0, pointerEvents: 'none' }
                    }
                >
                    <Arrow className={style.arrowLeft} />
                </Button>

            </div>

            {state.width === 2
                ? <div className={style.dots} />
                : <Dots numberOfDots={opinions.length - state.width} selected={state.selected} setSelected={setSelected} />
            }
            <Image
                src="/images/swipe-horizontal.png"
                alt="swipe"
                className={style.swipe}
                width={100}
                height={100}
                style={{
                    opacity:
                        state.touchStart === 0 &&
                            state.selected === 0 &&
                            state.width !== 2
                            ? 1
                            : 0
                }}
            />
        </div>
    )
}


const opinions = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO',
        foto: 'images/john-doe.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'CEO',
        foto: 'images/jane-doe.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 3,
        name: 'John Smith',
        role: 'CEO',
        foto: 'images/john-smith.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 4,
        name: 'Jane Smith',
        role: 'CEO',
        foto: 'images/jane-smith.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 5,
        name: 'John Doe',
        role: 'CEO',
        foto: 'images/john-doe.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 6,
        name: 'Jane Doe',
        role: 'CEO',
        foto: 'images/jane-doe.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 7,
        name: 'John Smith',
        role: 'CEO',
        foto: 'images/john-smith.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 8,
        name: 'Jane Smith',
        role: 'CEO',
        foto: 'images/jane-smith.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.',
    },
    {
        id: 9,
        name: 'Jane Smith',
        role: 'CEO',
        foto: 'images/jane-smith.jpg',
        logo: 'images/logo.png',
        opinion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quamvelit, vulputate eu pharetra nec, mattis ac neque.',
    }
];