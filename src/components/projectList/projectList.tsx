"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
    const router = useRouter();

    // Tworzy listę unikalnych tagów z projektów.
    const tags = useMemo(() => projects.map((project: Project) => project.tag), []);
    const uniqueTags = useMemo(() => tags.filter((tag, index, array) => array.indexOf(tag) === index), []);

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
        if (showSelected)
            projectsToShow['selected'] = projects.filter(project => project.selected);
        else
            uniqueTags.forEach((tag) => projectsToShow[tag] = projectsGroupedByTag[tag]);
        return projectsToShow;
    }, [uniqueTags, projectsGroupedByTag, showSelected]);

    // Ustawia selectedTag na podstawie showSelected i uniqueTags.
    const [selectedTag, setSelectedTag] = useState<string>(showSelected
        ? 'selected'
        : uniqueTags[0]
            ? uniqueTags[0]
            : 'selected');

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

    // Renderuje listę projektów i przyciski do przełączania między tagami.
    return (
        <div className={`${style.wrapper} ${className && className}`}>
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
