"use client";

import { DataTable } from "@/components/data-table";
import { Project } from "@/data/schema";
import { projectStatuses } from "@/data/features-data";
import { columns } from "./column";

export function ProjectsTable({ data }: { data: Project[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="name"
      searchPlaceholder="Search projects..."
      itemLabel="Projects"
      addNewLabel="Add New Project"
      filters={[
        { column: "status", title: "Status", options: projectStatuses },
      ]}
    />
  );
}
