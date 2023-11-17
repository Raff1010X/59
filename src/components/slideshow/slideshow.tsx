"use client"

import sync from '@/utils/sync'
import Arrow from '../arrow/arrow'
import style from './slideshow.module.css'
import Link from 'next/link'
import Button from '../button/button'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from '../image/image'

interface SlideshowProps {
    className?: string
    data: {
        text: string
        image: string
        link: string
        description: string
    }[]
}

export default function Slideshow(props: SlideshowProps) {
    const { className, data } = props

    const router = useRouter()

    useEffect(() => {
        sync(['showArrowBackground', 'showNumber', 'moveArrowBackground'])
    }, [])

    const images = data.map((slide, index) =>
        <Image
            key={index}
            src={slide.image}
            alt={slide.text}
            className={style.rightBackground}
            width={1000}
            size={1}
        />
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
                {data.map((slide, index) =>
                    <p key={index} className={style.number}>
                        {`0${index + 1}`}
                    </p>
                )}
            </div>

            <div className={style.links}>
                {data.map((slide, index) =>
                    <Link key={index} href={slide.link} className={style.link}>
                        {slide.text}
                        <div className={style.linkArrowBackground}>
                            <Arrow />
                        </div>
                    </Link>
                )}
            </div>

            <div className={style.description}>
                {data.map((slide, index) =>
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