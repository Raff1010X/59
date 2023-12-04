import { redirect } from "next/navigation"
import { uniqueTags } from "@/components/project/utils";

const ProjectPage = () => redirect(`/projects/${uniqueTags[0]}`);

export default ProjectPage;