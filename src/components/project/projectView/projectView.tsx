"use client";
import { getCurrentProject } from "@/components/project/utils";

// import style from "./projectView.module.css";

export default function ProjectView(params: { projectId: string }) {
    const { projectId } = params;

    const currentProject = getCurrentProject(projectId);

    return (
        <div>
            <h1>{currentProject.id}</h1>
        </div>
    )
}
    
