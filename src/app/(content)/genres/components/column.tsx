"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Clock, Tag } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-row-action";
import { formatTimeAgo } from "@/lib/utils";

export interface Genre {
  id: string;
  name: string;
  itemCount: number;
  createdAt: string;
}

export const columns: ColumnDef<Genre>[] = [
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
      <DataTableColumnHeader column={column} title="Genre" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 font-medium">
        <Tag className="size-3.5 text-muted-foreground" />
        <span>{row.getValue("name")}</span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "itemCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Items" />
    ),
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
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
