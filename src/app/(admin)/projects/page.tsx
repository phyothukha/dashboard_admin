import React from "react";
import { z } from "zod";
import { projectSchema } from "@/data/schema";
import projects from "@/data/projects.json";
import { ProjectsTable } from "./components/projects-table";

async function getProjects() {
  return z.array(projectSchema).parse(projects);
}

const ProjectsPage = async () => {
  const data = await getProjects();

  return (
    <main className="w-full h-full flex-1 flex-col space-y-5 mt-5">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          Track ongoing projects and their delivery status.
        </p>
      </div>
      <ProjectsTable data={data} />
    </main>
  );
};

export default ProjectsPage;
