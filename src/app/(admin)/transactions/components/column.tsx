"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Clock } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table-row-action";
import { Transaction } from "@/data/schema";
import {
  transactionMethods,
  transactionStatuses,
  transactionTypes,
} from "@/data/transactions-data";
import { statusTextTone } from "@/lib/status-colors";
import { cn, formatTimeAgo } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const columns: ColumnDef<Transaction>[] = [
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
    accessorKey: "customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarImage
            src={row.original.customerAvatar}
            alt={row.original.customer}
          />
          <AvatarFallback>{initials(row.original.customer)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.customer}</span>
          <span className="text-xs text-muted-foreground">
            {row.original.reference}
          </span>
        </div>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = transactionTypes.find(
        (t) => t.value === row.getValue("type"),
      );
      return (
        <Badge variant="outline">{type?.label ?? row.getValue("type")}</Badge>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "method",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Method" />
    ),
    cell: ({ row }) => {
      const method = transactionMethods.find(
        (m) => m.value === row.getValue("method"),
      );
      if (!method) return null;
      return (
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <method.icon className="size-3.5" />
          <span>{method.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = transactionStatuses.find(
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
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));
      const isNegative = amount < 0;
      return (
        <span
          className={cn(
            "font-medium tabular-nums",
            isNegative ? statusTextTone.danger : statusTextTone.success,
          )}
        >
          {isNegative ? "-" : "+"}$
          {Math.abs(amount).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
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
