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

export const tagSlug = uniqueTags.map(tag => ({ slug: [tag] }));

export const projectSlug = projects.map(project => ({ slug: [project.tag, project.id] }))