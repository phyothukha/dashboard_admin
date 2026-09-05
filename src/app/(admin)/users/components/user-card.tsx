import { Row } from "@tanstack/react-table";
import { Clock, Radio } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserRow } from "@/data/schema";
import { userRoles, userSources, userStatuses } from "@/data/users-data";
import { cn, formatTimeAgo } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function UserCard({ row }: { row: Row<UserRow> }) {
  const user = row.original;
  const status = userStatuses.find((s) => s.value === user.status);
  const role = userRoles.find((r) => r.value === user.role);
  const source = userSources.find((s) => s.value === user.source);

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-10 shrink-0">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{initials(user.name)}</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-medium">{user.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {user.email}
            </span>
          </div>
        </div>
        {status && (
          <Badge
            className={cn("rounded-md border-0 font-medium", status.className)}
          >
            {status.label}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="capitalize">{role?.label}</span>
        {source && (
          <div className="flex items-center gap-1.5">
            <source.icon className="size-3.5" />
            <span>{source.label}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Radio className="size-3.5" />
          <span>{formatTimeAgo(user.lastActive)}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          <span>{formatTimeAgo(user.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
