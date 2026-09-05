"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Clock } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { recordActions } from "@/data/content-data";
import { RecordItem } from "@/data/schema";
import { cn, formatTimeAgo } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const columns: ColumnDef<RecordItem>[] = [
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
    accessorKey: "actor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actor" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-8">
          <AvatarImage
            src={row.original.actorAvatar}
            alt={row.original.actor}
          />
          <AvatarFallback>{initials(row.original.actor)}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{row.original.actor}</span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      const action = recordActions.find(
        (a) => a.value === row.getValue("action"),
      );
      if (!action) return null;
      return (
        <Badge
          className={cn("rounded-md border-0 font-medium", action.className)}
        >
          {action.label}
        </Badge>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[320px] truncate">{row.getValue("title")}</span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="When" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Clock className="size-3.5" />
        <span>{formatTimeAgo(row.getValue("createdAt"))}</span>
      </div>
    ),
  },
];

interface RecordTableProps {
  data: RecordItem[];
  itemLabel: string;
}

export function RecordTable({ data, itemLabel }: RecordTableProps) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder="Search records..."
      itemLabel={itemLabel}
      filters={[{ column: "action", title: "Action", options: recordActions }]}
    />
  );
}
