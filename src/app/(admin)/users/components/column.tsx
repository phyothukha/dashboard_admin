"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Clock, Radio } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { UserRow } from "@/data/schema";
import { userRoles, userSources, userStatuses } from "@/data/users-data";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-row-action";
import { cn, formatTimeAgo } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const columns: ColumnDef<UserRow>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Users" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarImage src={row.original.avatar} alt={row.original.name} />
          <AvatarFallback>{initials(row.original.name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-xs text-muted-foreground">
            {row.original.email}
          </span>
        </div>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = userRoles.find((r) => r.value === row.getValue("role"));
      return (
        <span className="capitalize">
          {role?.label ?? row.getValue("role")}
        </span>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "lastActive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Activities" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Radio className="size-3.5" />
        <span>{formatTimeAgo(row.getValue("lastActive"))}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = userStatuses.find(
        (s) => s.value === row.getValue("status"),
      );
      if (!status) return null;
      return (
        <Badge
          className={cn("rounded-md border-0 font-medium", status.className)}
        >
          {status.label}
        </Badge>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Clock className="size-3.5" />
        <span>{formatTimeAgo(row.getValue("createdAt"))}</span>
      </div>
    ),
  },
  {
    accessorKey: "source",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
    cell: ({ row }) => {
      const source = userSources.find(
        (s) => s.value === row.getValue("source"),
      );
      if (!source) return null;
      return (
        <div className="flex items-center gap-1.5">
          <source.icon className="size-4" />
          <span>{source.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
