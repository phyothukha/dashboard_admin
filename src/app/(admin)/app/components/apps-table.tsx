"use client";

import { DataTable } from "@/components/data-table";
import { App } from "@/data/schema";
import { appCategories, appStatuses } from "@/data/features-data";
import { columns } from "./column";
import { AppCard } from "./app-card";

export function AppsTable({ data }: { data: App[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="name"
      searchPlaceholder="Search apps..."
      itemLabel="Apps"
      addNewLabel="Add New App"
      renderGridItem={(row) => <AppCard row={row} />}
      filters={[
        { column: "status", title: "Status", options: appStatuses },
        { column: "category", title: "Category", options: appCategories },
      ]}
    />
  );
}
