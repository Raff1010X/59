"use client";
import { useEffect, useRef, useState } from 'react';
import style from './projectList.module.css';
import Arrow from '../arrow/arrow';
import Button from '../button/button';
import ProjectItem from './projectItem';
import { Project } from './projectItem';
import projects from '@/data/projects.json';
import { useRouter } from 'next/navigation';

interface ProjectListProps {
    className?: string;
    showSelected?: boolean;
}

export default function ProjectList(props: ProjectListProps) {
    const { className, showSelected } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedTag, setSelectedTag] = useState<string>('webdesign');
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            const columns = [
                { count: 1, width: 768 },
                { count: 2, width: 1430 },
                { count: 3, width: 10000 },
            ]
            if (containerRef.current) {
                containerRef.current.style.height = 'auto';
                const width = window.innerWidth;
                const column = columns.find((column) => width <= column.width);

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
        window.addEventListener('resize', () => setTimeout(handleResize, 50));
        return () => {
            window.removeEventListener('resize', () => setTimeout(handleResize, 50))
        };
    }, [containerRef, selectedTag]);

    const tags = projects.map((project: Project) => project.tag);
    const uniqueTags = tags.filter((tag, index, array) => array.indexOf(tag) === index);
    const projectsToShow = showSelected
        ? projects.filter(project => project.selected === true)
        : projects.filter(project => project.tag === selectedTag);

    return (
        <div className={`${style.wrapper} ${className}`}>
            <div className={style.header}>
                <div className={style.title}>
                    {showSelected
                        ? 'wybrane projekty'
                        : 'portfolio'
                    }
                </div>
                {showSelected
                    ?
                    <Button
                        selected
                        className={style.button}
                        onClick={() => { router.push('/projects') }}>
                        zobacz całe portfolio
                        <Arrow className={style.arrowButton} />
                    </Button>
                    :
                    <div className={style.buttons}>
                        {uniqueTags.map((tag) => (
                            <Button
                                key={tag}
                                selected={selectedTag === tag}
                                className={style.button}
                                onClick={() => setSelectedTag(tag)}>
                                {tag}
                            </Button>
                        ))}
                    </div>
                }
            </div>

            <div ref={containerRef} className={style.list}>
                {projectsToShow.map((project) => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}