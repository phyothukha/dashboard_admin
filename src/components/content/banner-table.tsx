"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { CalendarRange, Link2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/data-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-row-action";
import { bannerStatuses } from "@/data/content-data";
import { BannerItem } from "@/data/schema";
import { cn } from "@/lib/utils";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const columns: ColumnDef<BannerItem>[] = [
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
      <DataTableColumnHeader column={column} title="Banner" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Image
          src={row.original.image}
          alt={row.original.title}
          width={64}
          height={36}
          className="h-9 w-16 shrink-0 rounded-md object-cover"
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
    accessorKey: "linkTo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Link2 className="size-3.5" />
        <span className="max-w-[180px] truncate">{row.getValue("linkTo")}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = bannerStatuses.find(
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
    accessorKey: "position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Position" />
    ),
    cell: ({ row }) => <span>#{row.getValue("position")}</span>,
  },
  {
    id: "schedule",
    header: "Schedule",
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <CalendarRange className="size-3.5" />
        <span>
          {formatDate(row.original.startDate)} –{" "}
          {formatDate(row.original.endDate)}
        </span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];

interface BannerTableProps {
  data: BannerItem[];
  itemLabel: string;
  addNewLabel: string;
}

export function BannerTable({
  data,
  itemLabel,
  addNewLabel,
}: BannerTableProps) {
  return (
    <DataTable
      data={data}
      columns={columns}
      searchColumn="title"
      searchPlaceholder="Search banners..."
      itemLabel={itemLabel}
      addNewLabel={addNewLabel}
      filters={[{ column: "status", title: "Status", options: bannerStatuses }]}
    />
  );
}
