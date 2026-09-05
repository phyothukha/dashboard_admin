"use client";

import { DataTable } from "@/components/data-table";
import { UserRow } from "@/data/schema";
import { userRoles, userSources, userStatuses } from "@/data/users-data";
import { mapOptions } from "@/lib/option-map";
import { columns } from "./column";
import { UserCard } from "./user-card";

export function UsersTable({ data }: { data: UserRow[] }) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="name"
      searchPlaceholder="Search users..."
      itemLabel="Users"
      addNewLabel="Add New User"
      renderGridItem={(row) => <UserCard row={row} />}
      filters={[
        {
          column: "status",
          title: "Status",
          options: mapOptions(userStatuses),
        },
        { column: "role", title: "Role", options: mapOptions(userRoles) },
        {
          column: "source",
          title: "Source",
          options: mapOptions(userSources),
        },
      ]}
    />
  );
}
