import { MoreHorizontal } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VALUE = 68;
const TARGET = 80;
const TICKS = 32;

function Gauge({ value }: { value: number }) {
  const cx = 100;
  const cy = 96;
  const rOuter = 88;
  const rInner = 74;

  const items = Array.from({ length: TICKS }, (_, i) => {
    const fraction = i / (TICKS - 1);
    const angle = Math.PI - fraction * Math.PI; // 180deg -> 0deg
    const x1 = cx + rInner * Math.cos(angle);
    const y1 = cy - rInner * Math.sin(angle);
    const x2 = cx + rOuter * Math.cos(angle);
    const y2 = cy - rOuter * Math.sin(angle);
    const active = fraction * 100 <= value;
    return { x1, y1, x2, y2, active, key: i };
  });

  return (
    <svg viewBox="0 0 200 100" className="w-full max-w-[220px]">
      {items.map((tick) => (
        <line
          key={tick.key}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          strokeWidth={4}
          strokeLinecap="round"
          className={tick.active ? "stroke-emerald-500" : "stroke-muted"}
        />
      ))}
    </svg>
  );
}

export function RepeatCustomerRate() {
  return (
    <Card className="py-5">
      <CardHeader className="px-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">
            Repeat Customer Rate
          </CardTitle>
          <Button variant="ghost" size="icon" className="size-7">
            <MoreHorizontal className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center px-5">
        <div className="relative flex w-full flex-col items-center">
          <Gauge value={VALUE} />
          <div className="-mt-10 flex flex-col items-center text-center">
            <span className="text-3xl font-bold tabular-nums">{VALUE}%</span>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          On track for {TARGET}% target
        </p>
        <Button variant="outline" size="sm" className="mt-3 w-full">
          Show details
        </Button>
      </CardContent>
    </Card>
  );
}
