"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { statusTone } from "@/lib/status-colors";
import { cn } from "@/lib/utils";

const chartData = [
  { day: 1, thisMonth: 3200, lastMonth: 4100 },
  { day: 3, thisMonth: 3600, lastMonth: 3900 },
  { day: 5, thisMonth: 3100, lastMonth: 3700 },
  { day: 7, thisMonth: 4400, lastMonth: 3500 },
  { day: 9, thisMonth: 5200, lastMonth: 3800 },
  { day: 11, thisMonth: 6800, lastMonth: 4200 },
  { day: 13, thisMonth: 6100, lastMonth: 4500 },
  { day: 15, thisMonth: 7400, lastMonth: 4800 },
  { day: 16, thisMonth: 9200, lastMonth: 5000 },
  { day: 18, thisMonth: 12324, lastMonth: 5563 },
  { day: 20, thisMonth: 10800, lastMonth: 5300 },
  { day: 22, thisMonth: 11600, lastMonth: 5600 },
  { day: 24, thisMonth: 9800, lastMonth: 5100 },
  { day: 26, thisMonth: 10400, lastMonth: 5400 },
  { day: 27, thisMonth: 13100, lastMonth: 5800 },
  { day: 29, thisMonth: 12600, lastMonth: 5700 },
];

const customerSegments = [
  { label: "Retailers", value: 2884, color: "bg-primary" },
  { label: "Distributors", value: 1432, color: "bg-emerald-500" },
  { label: "Wholesalers", value: 562, color: "bg-amber-500" },
];

const customerTotal = customerSegments.reduce((sum, s) => sum + s.value, 0);

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: (typeof chartData)[number] }[];
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;

  return (
    <div className="rounded-lg border bg-popover px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-popover-foreground">
        Jan {point.day}, 2025
      </p>
      <div className="mt-1.5 space-y-1">
        <p className="flex items-center gap-1.5 text-popover-foreground">
          <span className="size-1.5 rounded-full bg-primary" />$
          {point.thisMonth.toLocaleString()} this month
        </p>
        <p className="flex items-center gap-1.5 text-muted-foreground">
          <span className="size-1.5 rounded-full bg-muted-foreground" />$
          {point.lastMonth.toLocaleString()} last month
        </p>
      </div>
    </div>
  );
}

export function TotalProfitCard() {
  return (
    <Card className="py-5">
      <CardContent className="px-5">
        <p className="text-sm font-medium">Total Profit</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-3xl font-bold tabular-nums">$446.7K</span>
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-xs font-medium",
              statusTone.get("success")!,
            )}
          >
            <ArrowUp className="size-3" />
            24.4%
          </span>
        </div>
        <p className="text-xs text-muted-foreground">vs last period</p>

        <div className="mt-2 h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 8, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--primary)"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--primary)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis
                dataKey="day"
                tickFormatter={(day) => `${day} Jan`}
                ticks={[1, 8, 15, 22, 29]}
                stroke="var(--muted-foreground)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="lastMonth"
                stroke="var(--muted-foreground)"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                fill="none"
              />
              <Area
                type="monotone"
                dataKey="thisMonth"
                stroke="var(--primary)"
                strokeWidth={2}
                fill="url(#fillProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 border-t pt-4">
          <p className="text-sm font-medium">Customers</p>
          <div className="mt-3 grid grid-cols-3 gap-4">
            {customerSegments.map((segment) => (
              <div key={segment.label}>
                <div className="flex items-center gap-1.5 text-lg font-bold tabular-nums">
                  <span className={`size-2 rounded-full ${segment.color}`} />
                  {segment.value.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">{segment.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full bg-muted">
            {customerSegments.map((segment) => (
              <div
                key={segment.label}
                className={segment.color}
                style={{ width: `${(segment.value / customerTotal) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
