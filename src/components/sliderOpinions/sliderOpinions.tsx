"use client";
import { useEffect, useState } from 'react';
import style from './sliderOpinions.module.css';
import Dots from './dots/dots';
import Slider from './slider/slider';
import Button from '../button/button';
import Arrow from '../arrow/arrow';

interface SliderOpinionsProps {
    styleName?: string;
    title?: string;
}

export default function SliderOpinions(props: SliderOpinionsProps) {
    const { styleName, title } = props;

    const [selected, setSelected] = useState(0);

    const next = () => {
        if (selected === opinions.length - 1) {
            setSelected(0);
        } else {
            setSelected(selected + 1);
        }
    }

    const prev = () => {
        if (selected === 0) {
            setSelected(opinions.length - 1);
        } else {
            setSelected(selected - 1);
        }
    }

    const width = window.innerWidth >= 1430 ? 1 : 0;

    const [redraw, setRedraw] = useState(false);
    
    useEffect(() => {
        const redrawSlider = () => {
            setRedraw(!redraw);
        }
        window.addEventListener('resize', redrawSlider);
        return () => window.removeEventListener('resize', redrawSlider);
    }, [redraw]);


    return (
        <div className={`${style.wrapper} ${styleName}`}>
            
            <div className={style.title}>
                {title}
            </div>

            <div className={style.container}>

                <Slider className={style.slider} data={opinions} selected={selected} />

                {selected < opinions.length - 1 - width
                    && <Button className={style.buttonRight} onClick={next} selected>
                        <Arrow />
                    </Button>}
                {selected > 0
                    && <Button className={style.buttonLeft} onClick={prev} selected>
                        <Arrow className={style.arrowLeft} />
                    </Button>}

            </div>

            <Dots numberOfDots={opinions.length - width} selected={selected} setSelected={setSelected} />
        
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