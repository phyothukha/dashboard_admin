"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-row-action";
import { DisplayItem } from "@/data/schema";
import { statusTone } from "@/lib/status-colors";
import { cn, formatTimeAgo } from "@/lib/utils";

const visibilityOptions = [
  {
    value: "visible",
    label: "Visible",
    className: statusTone.success,
  },
  {
    value: "hidden",
    label: "Hidden",
    className: statusTone.neutral,
  },
];

const columns: ColumnDef<DisplayItem>[] = [
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Image
          src={row.original.thumbnail}
          alt={row.original.title}
          width={56}
          height={36}
          className="size-9 shrink-0 rounded-md object-cover"
          unoptimized
        />
        <span className="max-w-[280px] truncate font-medium">
          {row.original.title}
        </span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "section",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Section" />
    ),
    cell: ({ row }) => (
      <Badge variant="outline">{row.getValue("section")}</Badge>
    ),
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Position" />
    ),
    cell: ({ row }) => <span>#{row.getValue("position")}</span>,
  },
  {
    accessorKey: "visible",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Visibility" />
    ),
    cell: ({ row }) => {
      const option = visibilityOptions.find(
        (o) => o.value === (row.getValue("visible") ? "visible" : "hidden"),
      );
      if (!option) return null;
      return (
        <Badge
          className={cn("rounded-md border-0 font-medium", option.className)}
        >
          {option.label}
        </Badge>
      );
    },
    filterFn: (row, id, value) =>
      value.includes(row.getValue(id) ? "visible" : "hidden"),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Clock className="size-3.5" />
        <span>{formatTimeAgo(row.getValue("updatedAt"))}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

interface DisplayTableProps {
  data: DisplayItem[];
  itemLabel: string;
  addNewLabel: string;
  sections: string[];
}

export function DisplayTable({
  data,
  itemLabel,
  addNewLabel,
  sections,
}: DisplayTableProps) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder="Search..."
      itemLabel={itemLabel}
      addNewLabel={addNewLabel}
      filters={[
        {
          column: "section",
          title: "Section",
          options: sections.map((s) => ({ label: s, value: s })),
        },
        {
          column: "visible",
          title: "Visibility",
          options: visibilityOptions,
        },
      ]}
    />
  );
}
