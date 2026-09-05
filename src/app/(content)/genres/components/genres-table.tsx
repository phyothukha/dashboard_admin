"use client";

import { DataTable } from "@/components/data-table";
import { columns, Genre } from "./column";

export function GenresTable({ data }: { data: Genre[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="name"
      searchPlaceholder="Search genres..."
      itemLabel="Genres"
      addNewLabel="Add New Genre"
    />
  );
}
