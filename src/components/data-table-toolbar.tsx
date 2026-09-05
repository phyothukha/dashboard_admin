"use client";

import { Table } from "@tanstack/react-table";
import { Download, LayoutGrid, ListFilter, Plus, Rows3, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DataTableFacetedFilter } from "./data-table-faced-table";
import { cn } from "@/lib/utils";

export interface DataTableFilterConfig {
  column: string;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchColumn?: string;
  searchPlaceholder?: string;
  filters?: DataTableFilterConfig[];
  view?: "list" | "grid";
  onViewChange?: (view: "list" | "grid") => void;
  showViewToggle?: boolean;
  addNewLabel?: string;
  onAddNew?: () => void;
  onExport?: () => void;
}

export function DataTableToolbar<TData>({
  table,
  searchColumn,
  searchPlaceholder = "Search...",
  filters = [],
  view = "list",
  onViewChange,
  showViewToggle = false,
  addNewLabel,
  onAddNew,
  onExport,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  function handleExport() {
    if (onExport) {
      onExport();
      return;
    }

    const columns = table
      .getAllLeafColumns()
      .filter(
        (column) =>
          column.id !== "select" &&
          column.id !== "actions" &&
          column.getIsVisible(),
      );

    const header = columns.map((c) => c.id);
    const rows = table.getFilteredRowModel().rows.map((row) =>
      columns
        .map((c) => {
          const value = row.getValue(c.id);
          const text = value == null ? "" : String(value);
          return `"${text.replace(/"/g, '""')}"`;
        })
        .join(","),
    );

    const csv = [header.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "export.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        {showViewToggle && (
          <div className="flex items-center gap-0.5 rounded-lg border bg-muted/40 p-0.5">
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => onViewChange?.("list")}
              className={cn(
                "h-7 gap-1.5 rounded-md px-2.5",
                view === "list" && "bg-background shadow-sm",
              )}
            >
              <Rows3 className="size-4" />
              List
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={() => onViewChange?.("grid")}
              className={cn(
                "h-7 gap-1.5 rounded-md px-2.5",
                view === "grid" && "bg-background shadow-sm",
              )}
            >
              <LayoutGrid className="size-4" />
              Grid
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-end gap-2">
        {searchColumn && (
          <Input
            placeholder={searchPlaceholder}
            value={
              (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(searchColumn)?.setFilterValue(event.target.value)
            }
            className="h-9 w-[160px] rounded-lg lg:w-[220px]"
          />
        )}

        {filters.length > 0 && (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1.5">
                <ListFilter className="size-4" />
                Filter
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2" align="end">
              <div className="flex flex-col gap-2">
                {filters.map((filter) => (
                  <DataTableFacetedFilter
                    key={filter.column}
                    column={table.getColumn(filter.column)}
                    title={filter.title}
                    options={filter.options}
                  />
                ))}
                {isFiltered && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => table.resetColumnFilters()}
                    className="justify-center"
                  >
                    Reset
                    <X />
                  </Button>
                )}
              </div>
            </PopoverContent>
          </Popover>
        )}

        <Button
          variant="outline"
          size="sm"
          className="h-9 gap-1.5"
          onClick={handleExport}
        >
          <Download className="size-4" />
          Export
        </Button>

        {addNewLabel && (
          <Button size="sm" className="h-9 gap-1.5" onClick={onAddNew}>
            <Plus className="size-4" />
            {addNewLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
