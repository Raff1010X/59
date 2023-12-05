"use client";

import Arrow from '../arrow/arrow';
import Button from '../button/button';
import styles from './chat.module.css';
import { useRouter } from 'next/navigation'

interface ChatProps {
    className?: string;
    header: string[];
    text: string[];
    button: string;
    linkTo: string;
}

export default function Chat(props: ChatProps) {
    const { className, header, text, button, linkTo } = props

    const router = useRouter()

    return (
        <div className={`container_medium ${styles.wrapper} ${className && className}`}>
            <SVG />
            {header.map((item, index) => {
                return (
                    <h1 className={styles.header} key={index}>
                        {item}
                    </h1>
                )
            })
            }
            {text.map((item, index) => {
                return (
                    <p className={styles.text} key={index}>
                        {item}
                    </p>
                )
            })
            }
            <Button selected className={styles.button} onClick={() => { router.push(linkTo) }}>
                {button}
                <Arrow className={styles.arrow} />
            </Button>
        </div>
    )
}

const SVG = () =>
    <svg className={styles.svg} viewBox="0 0 120 80">
        <g className={styles.circles}>
            <circle
                cx="22.345226"
                cy="22.866821"
                r="3.1045296" />
            <circle
                cx="34.418396"
                cy="22.866821"
                r="3.1045296" />
            <circle
                cx="46.49157"
                cy="22.866821"
                r="3.1045296" />
            <circle
                cx="73.158661"
                cy="45.978317"
                r="3.1045296" />
            <circle
                cx="85.231827"
                cy="45.978317"
                r="3.1045296" />
            <circle
                cx="97.305"
                cy="45.978317"
                r="3.1045296" />
        </g>
        <g className={styles.paths}>
            <path
                d="M 68.205686,17.507707 H 64.451248 V 4.3684973 H 14.548188 L 4.3855421,14.531147 V 40.031686 H 18.302625 l 6.731,6.731 v -6.731 h 16.891001 v 3.754441 h -13.13921 v 12.04119 L 16.746875,43.786127 H 0.63110516 V 12.975397 L 12.992438,0.61406736 h 55.213248 z"
            />
            <path
                d="m 62.89201,63.664231 v 3.902406 H 51.444532 v -11.73932 h 3.75444 v 7.836914 z"
            />
            <path
                d="m 51.444533,54.029593 h 3.75444 V 38.163692 l 9.219024,-9.943 h 50.846683 v -0.21965 35.663189 H 101.3476 l -6.730998,6.731 v -6.731 H 65.047934 v 3.902406 l 25.816877,-0.147965 v 12.04119 l 12.038539,-12.04119 h 16.11577 v -43.17206 0 H 62.89201 l -11.447477,12.36133 z"
            />
        </g>
    </svg>