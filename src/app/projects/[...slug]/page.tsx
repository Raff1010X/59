import ProjectList from "@/components/project/projectList/projectList"
import { ProjectGroupLinks } from "@/components/project/projectGroupLinks/projectGroupLinks";
import { slug } from "@/components/project/utils";
import ProjectView from "@/components/project/projectView/projectView";
import ProjectLink from "@/components/project/projectLink/projectLink";

export const generateStaticParams = () => slug

export default function Project({ params }: { params: { slug: string[] } }) {
    const [selectedTag, projectId] = params.slug;

    return (
        <main>
            <ProjectGroupLinks selectedTag={decodeURIComponent(selectedTag)} />
            {projectId
                ? <>
                    <ProjectView projectId={projectId} />
                    <ProjectLink projectId={projectId} text="next project" />
                </>
                : <ProjectList selectedTag={decodeURIComponent(selectedTag)} />}
        </main>
    )
}