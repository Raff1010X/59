import ProjectList from "@/components/project/projectList/projectList"
import { ProjectGroupLinks } from "@/components/project/projectGroupLinks/projectGroupLinks";
import { projectSlug, tagSlug } from "@/components/project/utils";
import ProjectView from "@/components/project/projectView/projectView";
import ProjectLink from "@/components/project/projectLink/projectLink";

export const generateStaticParams = () => {
    return [...tagSlug, ...projectSlug];
};

export default function Project({ params }: { params: { slug: string[] } }) {
    const { slug } = params;

    return (
        <div>
            <ProjectGroupLinks selectedTag={slug[0]} />
            {slug[1] && <ProjectView projectId={slug[1]} />}
            {slug[1] && <ProjectLink projectId={slug[1]} text="next project" />}
            {!slug[1] && <ProjectList selectedTag={slug[0]} />}
        </div>
    )
}