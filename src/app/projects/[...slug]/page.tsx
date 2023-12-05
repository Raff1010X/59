import ProjectList from "@/components/project/projectList/projectList"
import { ProjectGroupLinks } from "@/components/project/projectGroupLinks/projectGroupLinks";
import { projectSlug, tagSlug } from "@/components/project/utils";
import ProjectView from "@/components/project/projectView/projectView";
import ProjectLink from "@/components/project/projectLink/projectLink";

export const generateStaticParams = () => {
    return [...tagSlug, ...projectSlug];
};

export default function Project({ params }: { params: { slug: string[] } }) {
    const [selectedTag, projectId] = params.slug;

    return (
        <main>
            <ProjectGroupLinks selectedTag={selectedTag} />
            {projectId
                ? <>
                    <ProjectView projectId={projectId} />
                    <ProjectLink projectId={projectId} text="next project" />
                </>
                : <ProjectList selectedTag={selectedTag} />}
        </main>
    )
}