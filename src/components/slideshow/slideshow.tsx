"use client"

import sync from '@/utils/sync'
import Arrow from '../arrow/arrow'
import style from './slideshow.module.css'
import Link from 'next/link'
import Button from '../button/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'

const slides = [
    {
        text: 'web design',
        image: 'image1',
        background: 'sb1.jpg',
        link: '/link1',
        description: 'Minus quibusdam deserunt aperiam alias eligendi, possimus, veniam laudantium, earum veritatis nihil.',
    },
    {
        text: '3d & animation',
        image: 'image2',
        background: 'sb2.jpg',
        link: '/link2',
        description: 'Laboriosam quam vitae, enim doloribus nulla aliquid nihil aut, aspernatur, illo eligendi et saepe.',
    },
    {
        text: 'branding',
        image: 'image1',
        background: 'sb3.jpg',
        link: '/link3',
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

    const descriptions = slides.map((slide, index) => {
        return <p key={index} className={style.descriptionText}>
            {slide.description}
        </p>
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
        return <p key={index} className={style.number}>
            {`0${index + 1}`}
        </p>
    })

    const handleButtonClick = () => {
        router.push('/contact')
    }

    return (
        <div className={`${style.wrapper} ${className}`}>

            <div className={style.left}>

            </div>

            <div className={style.rightFront}>
                <Image src="/images/sb3.jpg" alt="image1" className={style.rightBackground} width={1000} height={1000} />
                <Image src="/images/sb1.jpg" alt="image1" className={style.rightBackground} width={1000} height={1000} />
                <Image src="/images/sb2.jpg" alt="image1" className={style.rightBackground} width={1000} height={1000} />
            </div>

            <div className={style.right}>
                <Image src="/images/sb1.jpg" alt="image1" className={style.rightBackground} width={1000} height={1000} />
                <Image src="/images/sb2.jpg" alt="image1" className={style.rightBackground} width={1000} height={1000} />
                <Image src="/images/sb3.jpg" alt="image1" className={style.rightBackground} width={1000} height={1000} />
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