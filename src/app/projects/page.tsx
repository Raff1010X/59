import { ProjectGroupLinks } from "@/components/project/projectGroupLinks/projectGroupLinks"
import ProjectList from "@/components/project/projectList/projectList"

export default function Projects() {
    return (
        <main>
            <ProjectGroupLinks selectedTag="webdesign" />
            <ProjectList selectedTag="webdesign" />
        </main>
    )
}