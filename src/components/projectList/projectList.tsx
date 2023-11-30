"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
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
            if (containerRef.current) {
                containerRef.current.style.height = 'auto';
                
                const width = window.innerWidth;
                const columns = [
                    { count: 1, width: 770 },
                    { count: 2, width: 1430 },
                    { count: 3, width: 10000 },
                ]
                const column = columns.find((column) => width < column.width);

                if (column && column.count > 1) {
                    const items = Array.from(containerRef.current.children) as HTMLDivElement[];
                    let height = Math.ceil(containerRef.current.offsetHeight / column.count);
                    let totalHeights = [0];
                    let currentIndex = 0;

                    for (let i = 0; i < items.length; i++) {
                        totalHeights[currentIndex] += items[i].offsetHeight + 80;
                        if (totalHeights[currentIndex] >= height) {
                            totalHeights.push(0);
                            currentIndex++;
                        }
                    }

                    let maxHeight = Math.max(...totalHeights);
                    containerRef.current.style.height = `${maxHeight + 50}px`;
                }
                containerRef.current.style.opacity = '1';
            }
        }

        handleResize();

        const resizeHandler = () => setTimeout(handleResize, 50);
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [containerRef, selectedTag]);

    const tags = useMemo(() => projects.map((project: Project) => project.tag), []);

    const uniqueTags = useMemo(() => tags.filter((tag, index, array) => array.indexOf(tag) === index), [tags]);
    const projectsToShow = useMemo(() => showSelected
        ? projects.filter(project => project.selected === true)
        : projects.filter(project => project.tag === selectedTag), [selectedTag, showSelected]);

    if (!projects || projects.length === 0) {
        return <div>No projects available</div>;
    }

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