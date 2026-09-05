import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  itemLabel?: string;
}

function getPageList(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, 2, 3, total]);
  if (current > 1 && current < total) {
    pages.add(current);
    pages.add(Math.max(1, current - 1));
    pages.add(Math.min(total, current + 1));
  }

  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  sorted.forEach((page, index) => {
    if (index > 0 && page - sorted[index - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(page);
  });

  return result;
}

export function DataTablePagination<TData>({
  table,
  itemLabel = "items",
}: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = Math.max(table.getPageCount(), 1);
  const currentPage = pageIndex + 1;
  const pageList = getPageList(currentPage, pageCount);

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-4 px-2 sm:flex-row">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Show</span>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 11, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span>{itemLabel} per page</span>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft />
        </Button>

        {pageList.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="flex size-8 items-center justify-center text-sm text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <Button
              key={page}
              size="icon"
              variant="ghost"
              onClick={() => table.setPageIndex(page - 1)}
              className={cn(
                "size-8 rounded-lg text-sm font-medium",
                page === currentPage
                  ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {page}
            </Button>
          ),
        )}

        <Button
          variant="outline"
          size="icon"
          className="size-8 rounded-lg"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
