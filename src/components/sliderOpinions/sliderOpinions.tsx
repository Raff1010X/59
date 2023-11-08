import { Suspense, useEffect, useState } from 'react';
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
    width: 0,
    loading: true,
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
            setState(() => ({
                selected: 0,
                width,
                loading: false,
            }));
        }
        redrawSlider();
        window.addEventListener('resize', redrawSlider);
        return () => window.removeEventListener('resize', redrawSlider);
    }, []);

    return (
        <div className={`${style.wrapper} ${styleName}`}>

            <div className={style.title}>
                {title}
            </div>

            <div className={style.container}>

                {state.loading
                    ? <Loader />
                    : <Slider className={style.slider} data={opinions} selected={state.selected} width={state.width === 0 ? 100 : 50} />}

                {state.selected < opinions.length - 1 - state.width
                    && state.width !== 2
                    && <Button className={style.buttonRight} onClick={next} selected>
                        <Arrow />
                    </Button>}
                {state.selected > 0
                    && state.loading
                    && <Button className={style.buttonLeft} onClick={prev} selected>
                        <Arrow className={style.arrowLeft} />
                    </Button>}

            </div>

            {state.loading
                ? <Dots numberOfDots={1} selected={0} setSelected={() => { }} />
                : <Dots numberOfDots={opinions.length - state.width} selected={state.selected} setSelected={setSelected} />
            }
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