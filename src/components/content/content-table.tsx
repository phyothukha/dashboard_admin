"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Calendar, Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-row-action";
import { contentStatuses } from "@/data/content-data";
import { ContentItem } from "@/data/schema";
import { cn, formatTimeAgo } from "@/lib/utils";

const columns: ColumnDef<ContentItem>[] = [
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
        <span className="max-w-[320px] truncate font-medium">
          {row.original.title}
        </span>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Genre" />
    ),
    cell: ({ row }) => <Badge variant="outline">{row.getValue("genre")}</Badge>,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = contentStatuses.find(
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
    accessorKey: "views",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Views" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Eye className="size-3.5" />
        <span>{Number(row.getValue("views")).toLocaleString()}</span>
      </div>
    ),
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
  },
  {
    accessorKey: "releaseDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Released" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Calendar className="size-3.5" />
        <span>{formatTimeAgo(row.getValue("releaseDate"))}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

interface ContentTableProps {
  data: ContentItem[];
  itemLabel: string;
  addNewLabel: string;
  genres: string[];
}

export function ContentTable({
  data,
  itemLabel,
  addNewLabel,
  genres,
}: ContentTableProps) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder={`Search ${itemLabel.toLowerCase()}...`}
      itemLabel={itemLabel}
      addNewLabel={addNewLabel}
      filters={[
        { column: "status", title: "Status", options: contentStatuses },
        {
          column: "genre",
          title: "Genre",
          options: genres.map((g) => ({ label: g, value: g })),
        },
      ]}
    />
  );
}
