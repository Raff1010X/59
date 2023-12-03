"use client";
import { useEffect, useMemo, useRef, useState } from 'react';
import style from './projectList.module.css';
import ProjectItem from '../projectItem/projectItem';
import { Project } from '../projectItem/projectItem';
import projects from '@/data/projects.json';
import { ProjectGroupLinks } from '../projectGroupLinks/projectGroupLinks';

interface ProjectListProps {
    className?: string;
    selectedTag: string;
}

export default function ProjectList(props: ProjectListProps) {
    const { className, selectedTag } = props;
    const containerRef = useRef<HTMLDivElement>(null);

    // Tworzy listę unikalnych tagów z projektów.
    const tags = useMemo(() => projects.map((project: Project) => project.tag), []);
    const uniqueTags = useMemo(() => tags.filter((tag, index, array) => array.indexOf(tag) === index), [tags]);

    // Grupuje projekty według ich tagów.
    const projectsGroupedByTag = useMemo(() => {
        return projects.reduce((groups, project) => {
            (groups[project.tag] = groups[project.tag] || []).push(project);
            return groups;
        }, {} as { [key: string]: Project[] });
    }, []);

    // Decyduje, które projekty pokazać na podstawie wartości showSelected.
    const projectsToShow = useMemo(() => {
        const projectsToShow: { [key: string]: Project[] } = {};
        if (selectedTag === 'selected')
            projectsToShow['selected'] = projects.filter(project => project.selected);
        else
            uniqueTags.forEach((tag) => projectsToShow[tag] = projectsGroupedByTag[tag]);
        return projectsToShow;
    }, [uniqueTags, projectsGroupedByTag, selectedTag]);

    // Definiuje funkcję handleResize, która dostosowuje wysokość kontenera na podstawie liczby kolumn i wysokości elementów.
    function handleResize() {
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
                const bottomMargin = 80;

                for (let i = 0; i < items.length; i++) {
                    totalHeights[currentIndex] += items[i].offsetHeight + bottomMargin;
                    if (totalHeights[currentIndex] >= height) {
                        totalHeights.push(0);
                        currentIndex++;
                    }
                }
                let maxHeight = Math.max(...totalHeights);
                containerRef.current.style.height = `${maxHeight + 50}px`;
            }
        }
    };

    // Wywołuje handleResize za każdym razem, gdy selectedTag się zmienia.
    useEffect(() => {
        handleResize();
    }, [selectedTag]);

    // Dodaje i usuwa nasłuchiwanie zdarzenia resize na oknie, oraz ustawia opacity na 1 po załadowaniu komponentu
    useEffect(() => {
        if (containerRef.current) containerRef.current.style.opacity = '1';
        const resizeHandler = () => setTimeout(() => handleResize(), 50);
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    // Renderuje listę projektów.
    return (
        <div className={`${style.wrapper} ${className && className}`}>
            <div ref={containerRef} className={style.list}>
                {projectsToShow[selectedTag].map(project => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}
