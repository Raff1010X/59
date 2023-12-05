import { Project } from "@/components/project/projectItem/projectItem";
import projects from "@/data/projects.json";

const tags = projects.map((project: Project) => project.tag);

export const uniqueTags = tags.filter((tag, index, array) => array.indexOf(tag) === index);

export const getCurrentProject = (projectId: string): Project =>
    projects.find(project => project.id === projectId) as Project;

export const getNextProject = (currentProject: Project): Project => {
    const filteredProjects = projects.filter(project => project.tag === currentProject.tag);
    const currentIndex = filteredProjects.findIndex(project => project.id === currentProject.id);
    const nextIndex = (currentIndex < filteredProjects.length - 1) ? currentIndex + 1 : 0;
    return filteredProjects[nextIndex];
}

// Zwraca slugi tagów w formacie [tag].
export const tagSlug = uniqueTags.map(tag => ({ slug: [tag] }));

// Zwraca slugi projektów w formacie [tag, id].
export const projectSlug = projects.map(project => ({ slug: [project.tag, project.id] }))

// Grupuje projekty według ich tagów.
export const projectsGroupedByTag = projects.reduce((groups, project) => {
    (groups[project.tag] = groups[project.tag] || []).push(project);
    return groups;
}, {} as { [key: string]: Project[] });

// Zwraca obiekt zawierający projekty do wyświetlenia wg. wybranego tagu
export const projectsToShow: { [key: string]: Project[] } = {
    all: projects,
    selected: projects.filter(project => project.selected),
    ...projectsGroupedByTag
};


