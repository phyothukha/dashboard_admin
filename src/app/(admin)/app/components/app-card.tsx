import Image from "next/image";
import { Row } from "@tanstack/react-table";
import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { App } from "@/data/schema";
import { appCategories, appStatuses } from "@/data/features-data";
import { cn } from "@/lib/utils";

export function AppCard({ row }: { row: Row<App> }) {
  const app = row.original;
  const category = appCategories.find((c) => c.value === app.category);
  const status = appStatuses.find((s) => s.value === app.status);

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={app.icon}
            alt={app.name}
            width={44}
            height={44}
            className="size-11 shrink-0 rounded-xl object-cover"
            unoptimized
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium">{app.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {app.developer}
            </span>
          </div>
        </div>
        {status && (
          <Badge
            className={cn(
              "shrink-0 rounded-md border-0 font-medium",
              status.className,
            )}
          >
            {status.label}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <Badge variant="outline">{category?.label}</Badge>
        <div className="flex items-center gap-1">
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          <span>{app.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="border-t pt-3 text-xs text-muted-foreground">
        {app.installs.toLocaleString()} installs
      </div>
    </div>
  );
}
