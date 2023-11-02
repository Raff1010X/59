"use client"

import sync from '@/utils/sync'
import Arrow from '../arrow/arrow'
import style from './slideshow.module.css'
import Link from 'next/link'
import Button from '../button/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const slides = [
    {
        text: 'web design',
        image: '/images/sb1.jpg',
        link: '/webdesign',
        description: 'Minus quibusdam deserunt aperiam alias eligendi, possimus, veniam laudantium, earum veritatis nihil.',
    },
    {
        text: '3d & animation',
        image: '/images/sb2.jpg',
        link: '/animation',
        description: 'Laboriosam quam vitae, enim doloribus nulla aliquid nihil aut, aspernatur, illo eligendi et saepe.',
    },
    {
        text: 'branding',
        image: '/images/sb3.jpg',
        link: '/branding',
        description: 'Reiciendis doloribus, eveniet esse deserunt officia ipsam, harum, praesentium enim consequatur illum!',
    }
]

interface SlideshowProps {
    className?: string
}

export default function Slideshow(props: SlideshowProps) {
    const { className } = props

    const router = useRouter()

    useEffect(() => {
        sync(['showArrowBackground', 'showNumber', 'moveArrowBackground'])
    }, [])

    const images = slides.map((slide, index) =>
        <Image key={index} src={slide.image} alt={slide.text} className={style.rightBackground} width={1000} height={1000} />
    )

    return (
        <div className={`${style.wrapper} ${className}`}>

            <div className={style.left} />

            <div className={style.rightFront}>
                {images}
            </div>

            <div className={style.right}>
                {images}
            </div>

            <div className={style.center} />

            <div className={style.numbers}>
                {slides.map((slide, index) =>
                    <p key={index} className={style.number}>
                        {`0${index + 1}`}
                    </p>
                )}
            </div>

            <div className={style.links}>
                {slides.map((slide, index) =>
                    <Link key={index} href={slide.link} className={style.link}>
                        {slide.text}
                        <div className={style.linkArrowBackground}>
                            <Arrow />
                        </div>
                    </Link>
                )}
            </div>

            <div className={style.description}>
                {slides.map((slide, index) =>
                    <p key={index} className={style.descriptionText}>
                        {slide.description}
                    </p>
                )}
            </div>

            <Button selected className={style.button} onClick={() => router.push('/contact')}>
                bezpłatna konsultacja
                <Arrow />
            </Button>

            <div className={style.scroll}>
                <Arrow className={style.scrollArrow} />
            </div>

        </div>
    )
}