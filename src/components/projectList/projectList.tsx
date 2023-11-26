"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import style from './projectList.module.css';
import Image from '@/components/image/image';
import Arrow from '../arrow/arrow';
import Button from '../button/button';
import useScroll from '@/hooks/useScroll';

type Project = {
    id: string;
    name: string;
    description: string;
    aspectRatio: number;
    image?: string;
    video?: string;
};


interface ProjectListProps {
    className?: string;
    projects?: Project[];
    onProjectClick?: (project: Project) => void;
}


export default function ProjectList(props: ProjectListProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const columns = [
                { count: 1, width: 768 },
                { count: 2, width: 1429 },
                { count: 3, width: 10000 },
            ]
            if (containerRef.current) {
                const width = window.innerWidth;
                const column = columns.find((column) => width <= column.width);
                containerRef.current.style.height = 'auto';
                if (column && column.count > 1) {
                    let height = containerRef.current.offsetHeight / column.count;
                    const items = Array.from(containerRef.current.children) as HTMLDivElement[];
                    const highest = items.reduce((prev, curr) => Math.max(prev, curr.offsetHeight), 0);
                    const lowest = items.reduce((prev, curr) => Math.min(prev, curr.offsetHeight), 0);
                    containerRef.current.style.height = height + (highest + lowest) / 2 + 'px';
                }
                containerRef.current.style.opacity = '1';
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [containerRef, props.projects]);

    function handleButtonClick(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.title}>wybrane projekty</div>
                <Button selected className={style.button} onClick={handleButtonClick}>
                    zobacz całe portfolio
                    <Arrow className={style.arrowButton} />
                </Button>
            </div>

            <div ref={containerRef} className={style.list}>
                {projects.map((project) => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}

const ProjectItem = (props: { project: Project; }) => {
    const { project } = props;

    const ref = useRef<HTMLDivElement>(null);

    const scroll = useScroll({ ref });

    const [randomizer, setRandomizer] = useState(1);
    
    useEffect(() => {
        setRandomizer(Math.random() * 2 - 1);
    }, []);

    return (
        <div
            ref={ref}
            className={style.item}
            style={{
                transform: `translateY(${100 - scroll}px) rotate(${randomizer * (10 - scroll / 10)}deg)`,
                opacity: .5 + scroll / 200,
                filter: `grayscale(${100 - scroll}%) blur(${1 - scroll/100}px)`,
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
            <div className={style.overlay} >
                <div className={style.name}>{project.name}</div>
                <div className={style.description}>{project.description}</div>
                <div className={style.link}> {/* TODO: add links */}
                    zobacz projekt
                    <div className={style.linkArrowBackground}>
                        <Arrow className={style.arrow} />
                    </div>
                </div>
            </div>
        </div>
    );
}


const projects: Project[] = [
    {
        id: '1',
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1.5,
        image: '/images/projects/1.webp',
    },
    {
        id: '2',
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/2.webp',
    },
    {
        id: '3',
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / .5,
        image: '/images/projects/3.webp',
    },
    {
        id: '4',
        name: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 2 / 1,
        video: '/videos/demo.mp4',
    },
    {
        id: '5',
        name: 'Project 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / .5,
        image: '/images/projects/5.webp',
    },
    {
        id: '6',
        name: 'Project 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1.5,
        image: '/images/projects/6.webp',
    },
    {
        id: '7',
        name: 'Project 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/7.webp',
    },
    {
        id: '8',
        name: 'Project 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/8.webp',
    },
    {
        id: '9',
        name: 'Project 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1.5,
        image: '/images/projects/9.webp',
    },
    {
        id: '10',
        name: 'Project 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/10.webp',
    },
    {
        id: '11',
        name: 'Project 11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/11.webp',
    },
    {
        id: '12',
        name: 'Project 12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / .5,
        image: '/images/projects/12.webp',
    },
    {
        id: '13',
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1.5,
        image: '/images/projects/1.webp',
    },

    {
        id: '15',
        name: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 2 / 1,
        video: '/videos/demo.mp4',
    },
    {
        id: '14',
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / .5,
        image: '/images/projects/3.webp',
    },
    {
        id: '16',
        name: 'Project 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / .5,
        image: '/images/projects/5.webp',
    },
    {
        id: '17',
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/2.webp',
    },
    {
        id: '18',
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aspectRatio: 1 / 1,
        image: '/images/projects/2.webp',
    },
];

