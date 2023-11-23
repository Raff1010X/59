"use client";
import { useEffect, useRef } from 'react';
import style from './projectList.module.css';

type Project = {
    id: string;
    name: string;
    description: string;
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
                { count: 2, width: 1420 },
                { count: 3, width: 10000 },
            ]
            if (containerRef.current) {
                const width = containerRef.current.clientWidth;
                const column = columns.find((column) => width <= column.width);
                if (column) {
                    const items = Array.from(containerRef.current.children) as HTMLDivElement[];
                    const totalHeight = items.reduce((sum, item) => sum + item.clientHeight + 150, 0);
                    const containerHeight = totalHeight / column.count;
                    containerRef.current.style.height = `${containerHeight}px`;
                    const lowestItem = items.reduce((lowest, item) => {
                        const value = item.offsetTop + item.clientHeight;
                        return value > lowest ? value : lowest;
                    }, 0);
                    containerRef.current.style.height = `${lowestItem}px`;
                }
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [containerRef, props.projects]);

    return (
        <div className={style.wrapper}>
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
    return (
        <div className={style.item}>
            <div className={style.name}>{project.name}</div>
            <div className={style.description}>{project.description}</div>
        </div>
    );
}


const projects: Project[] = [
    {
        id: '1',
        name: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '2',
        name: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '3',
        name: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '4',
        name: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '5',
        name: 'Project 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '6',
        name: 'Project 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '7',
        name: 'Project 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '8',
        name: 'Project 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '9',
        name: 'Project 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '10',
        name: 'Project 10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '11',
        name: 'Project 11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    },
    {
        id: '12',
        name: 'Project 12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed diam eget dolor. Nulla facilisi. Nulla libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    }
];

