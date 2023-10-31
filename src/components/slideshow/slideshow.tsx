"use client"

import { useRef } from 'react'
import Arrow from '../arrow/arrow'
import style from './slideshow.module.css'
import Link from 'next/link'
import Button from '../button/button'
import { useRouter } from 'next/navigation'

const slides = [
    {
        text: 'web design',
        image: 'image1',
        background: 'red',
        link: '/link1',
        description: 'Łączymy idealnie projektowanie UX/UI ze sztuką tworzenia animacji, grafiki 3d i dobrym wizerunkiem.',
    },
    {
        text: '3d & animation',
        image: 'image2',
        background: 'red',
        link: '/link2',
        description: 'Łączymy idealnie projektowanie UX/UI ze sztuką tworzenia animacji, grafiki 3d i dobrym wizerunkiem.',
    },
    {
        text: 'branding',
        image: 'image1',
        background: 'red',
        link: '/link3',
        description: 'Łączymy idealnie projektowanie UX/UI ze sztuką tworzenia animacji, grafiki 3d i dobrym wizerunkiem.',
    }
]

interface SlideshowProps {
    className?: string
}

export default function Slideshow(props: SlideshowProps) {
    const { className } = props

    const router = useRouter()
    const numbersRef = useRef<HTMLDivElement[]>([])

    const descriptions = slides.map((slide, index) => {
        return <div key={index} className={style.descriptionText}>
            {slide.description}
        </div>
    })

    const links = slides.map((slide, index) => {
        return <Link key={index} href={slide.link} className={style.link}>
            {slide.text}
            <div className={style.linkArrowBackground}>
                <Arrow />
            </div>
        </Link>
    })

    const numbers = slides.map((slide, index) => {
        return <div key={index} className={style.number} ref={ref => numbersRef.current[index] = ref!}>
            {`0${index + 1}`}
        </div>
    })

    const handleButtonClick = () => {
        router.push('/contact')
    }

    return (
        <div className={`${style.wrapper} ${className}`}>

            <div className={style.left}>

            </div>

            <div className={style.right}>

            </div>

            <div className={style.rightFront}>

            </div>

            <div className={style.center}>

            </div>

            <div className={style.numbers}>
                {numbers}
            </div>

            <div className={style.links}>
                {links}
            </div>

            <div className={style.description}>
                {descriptions}
            </div>

            <Button selected className={style.button} onClick={handleButtonClick}>
                bezpłatna konsultacja
                <Arrow />
            </Button>

            <div className={style.scroll}>
                <Arrow className={style.scrollArrow} />
            </div>

        </div>
    )
}