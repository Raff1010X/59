"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import style from './projectItem.module.css';
import Image from '@/components/image/image';
import Arrow from '../../arrow/arrow';
import useScroll from '@/hooks/useScroll';
import Link from 'next/link';

export type Project = {
    id: string;
    name: string;
    shortDescription?: string;
    description: string;
    aspectRatio: number;
    image?: string;
    video?: string;
    selected: boolean;
    media?: string[];
    tag: string;
    scope?: string[];
};

export default function ProjectItem(props: { project: Project }) {
    const { project } = props;
    const ref = useRef<HTMLAnchorElement>(null);
    const scroll = useScroll({ ref });
    const [randomizer, setRandomizer] = useState(1);
    useEffect(() => {
        setRandomizer(Math.random() * 2 - 1);
    }, []);

    return (
        <Link
            href={`/projects/${project.tag}/${project.id}`}
            ref={ref}
            className={style.item}
            style={{
                transform: `translateY(${50 - scroll/2}%) scaleY(${1 + (100 - scroll) / 200}) rotate(${randomizer * (5 - scroll / 20)}deg)`,
                opacity: .5 + scroll / 200,
            }}
        >
            {project.image && (
                <Image
                    className={style.image}
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    style={{ aspectRatio: project.aspectRatio }}
                />
            )}
            {project.video && (
                <video
                    className={style.video}
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    style={{ width: project.aspectRatio * 100 + '%' }}
                />
            )}
            <div className={style.overlay}>
                <div className={style.name}>{project.name}</div>
                <div className={style.description}>{project.description}</div>
                <div className={style.link}>
                    zobacz projekt
                    <div className={style.linkArrowBackground}>
                        <Arrow className={style.arrow} />
                    </div>
                </div>
            </div>
        </Link>
    );
}