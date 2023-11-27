"use client";
import { useEffect, useRef } from 'react';
import style from './projectList.module.css';
import Arrow from '../arrow/arrow';
import Button from '../button/button';
import ProjectItem from './projectItem';
import projects from '@/data/projects.json';

interface ProjectListProps {
    className?: string;
}

export default function ProjectList(props: ProjectListProps) {
    const { className } = props;
    const containerRef = useRef<HTMLDivElement>(null);

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
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [containerRef]);

    function handleButtonClick(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className={`${style.wrapper} ${className}`}>
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