import projects from "@/data/projects.json";
import { Project } from "@/components/project/projectItem/projectItem";
import Link from "next/link";
import ProjectList from "@/components/project/projectList/projectList"
import { ProjectGroupLinks } from "@/components/project/projectGroupLinks/projectGroupLinks";
import { uniqueTags } from "@/components/project/utils";

export const generateStaticParams = () => {
    const tagSlug = uniqueTags.map(tag => ({ slug: [tag] }));
    const projectSlug = projects.map(project => ({ slug: [project.tag, project.id] }))
    return [...tagSlug, ...projectSlug];
};

function getNextProject(currentProject: Project, allProjects: Project[]): Project {
    const filteredProjects = allProjects.filter(project => project.tag === currentProject.tag);
    const currentIndex = filteredProjects.findIndex(project => project.id === currentProject.id);
    const nextIndex = (currentIndex < filteredProjects.length - 1) ? currentIndex + 1 : 0;
    return filteredProjects[nextIndex];
}

export default function Project({ params }: { params: { slug: string[] } }) {
    const { slug } = params;
    let currentProject;
    let nextProject;
    
    if (slug[1]) {
        currentProject = projects.find(project => project.id === slug[1]) as Project;
        nextProject = getNextProject(currentProject, projects);
    }


    return (
        <div>

            <ProjectGroupLinks selectedTag={slug[0]} />

            {slug[1]
                ?
                <>
                    <h1>{currentProject!.id}</h1>
                    <h1>{currentProject!.name}</h1>
                    <h1>{currentProject!.shortDescription}</h1>
                    <h1>{currentProject!.description}</h1>
                    <h1>{currentProject!.aspectRatio}</h1>
                    <h1>{currentProject!.image}</h1>
                    <h1>{currentProject!.video}</h1>
                    <h1>{currentProject!.selected}</h1>
                    <h1>{currentProject!.media}</h1>
                    <h1>{currentProject!.tag}</h1>
                    <Link href={`/projects/${nextProject!.tag}/${nextProject!.id}`} >
                        <p>{nextProject!.name}</p>
                        <p>next project</p>
                    </Link>
                </>
                :
                <ProjectList selectedTag={slug[0]} />
            }
        </div>
    )
}