"use client";

import { Bar, BarChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { MoreHorizontal } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const data = [
  { day: "Sun", value: 4200 },
  { day: "Mon", value: 5100 },
  { day: "Tue", value: 8162 },
  { day: "Wed", value: 3900 },
  { day: "Thu", value: 4600 },
  { day: "Fri", value: 5300 },
  { day: "Sat", value: 3400 },
];

const activeDay = "Tue";

export function MostDayActive() {
  return (
    <Card className="py-5">
      <CardHeader className="px-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Most Day Active</CardTitle>
          <Button variant="ghost" size="icon" className="size-7">
            <MoreHorizontal className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-5">
        <span className="text-2xl font-bold tabular-nums">
          {data.find((d) => d.day === activeDay)?.value.toLocaleString()}
        </span>

        <div className="mt-4 h-[130px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="30%">
              <Tooltip
                cursor={false}
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "1px solid var(--border)",
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                {data.map((entry) => (
                  <Cell
                    key={entry.day}
                    fill={
                      entry.day === activeDay
                        ? "var(--primary)"
                        : "var(--muted)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-1 grid grid-cols-7 text-center text-xs text-muted-foreground">
          {data.map((entry) => (
            <span
              key={entry.day}
              className={
                entry.day === activeDay ? "font-medium text-foreground" : ""
              }
            >
              {entry.day}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
