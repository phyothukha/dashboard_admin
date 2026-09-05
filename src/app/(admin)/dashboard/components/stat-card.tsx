import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { statusTone } from "@/lib/status-colors";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change: number;
  comparison: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  change,
  comparison,
}: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="py-5 gap-3">
      <CardContent className="px-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{label}</span>
          <Icon className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xl font-bold tabular-nums">{value}</span>
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium",
              isPositive ? statusTone.success : statusTone.danger,
            )}
          >
            {isPositive ? (
              <ArrowUp className="size-3" />
            ) : (
              <ArrowDown className="size-3" />
            )}
            {Math.abs(change)}%
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{comparison}</p>
      </CardContent>
    </Card>
  );
}
