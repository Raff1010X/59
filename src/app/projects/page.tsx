import { redirect } from "next/navigation"
import { uniqueTags } from "@/components/project/utils";

export default function ProjectPage() {
    redirect(`/projects/${uniqueTags[0]}`)
}
