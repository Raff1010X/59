import { Project } from "@/components/project/projectItem/projectItem";
import projects from "@/data/projects.json";

const tags = projects.map((project: Project) => project.tag);
export const uniqueTags = tags.filter((tag, index, array) => array.indexOf(tag) === index);
