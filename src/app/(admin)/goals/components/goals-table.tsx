"use client";

import { DataTable } from "@/components/data-table";
import { goalCategories, goalStatuses, mapOptions } from "@/data/features-data";
import { Goal } from "@/data/schema";
import { columns } from "./column";

export function GoalsTable({ data }: { data: Goal[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder="Search goals..."
      itemLabel="Goals"
      addNewLabel="Add New Goal"
      filters={[
        {
          column: "status",
          title: "Status",
          options: mapOptions(goalStatuses),
        },
        {
          column: "category",
          title: "Category",
          options: mapOptions(goalCategories),
        },
      ]}
    />
  );
}
