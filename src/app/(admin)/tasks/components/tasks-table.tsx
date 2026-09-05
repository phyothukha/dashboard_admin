"use client";

import { DataTable } from "@/components/data-table";
import { priorities, statuses } from "@/data/data";
import { Task } from "@/data/schema";
import { mapOptions } from "@/lib/option-map";
import { columns } from "./column";

export function TasksTable({ data }: { data: Task[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder="Filter tasks..."
      itemLabel="Tasks"
      addNewLabel="Add New Task"
      filters={[
        { column: "status", title: "Status", options: mapOptions(statuses) },
        {
          column: "priority",
          title: "Priority",
          options: mapOptions(priorities),
        },
      ]}
    />
  );
}
