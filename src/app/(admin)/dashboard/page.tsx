import type { Metadata } from "next";
import {
  Calendar,
  Download,
  LayoutGrid,
  MousePointerClick,
  ShoppingBag,
  Users,
  Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatCard } from "./components/stat-card";
import { TotalProfitCard } from "./components/total-profit-card";
import { BestSellingProducts } from "./components/best-selling-products";
import { MostDayActive } from "./components/most-day-active";
import { RepeatCustomerRate } from "./components/repeat-customer-rate";
import { AiAssistantCard } from "./components/ai-assistant-card";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of key metrics, sales, and activity at a glance.",
};

const stats = [
  {
    label: "Page Views",
    value: "16,431",
    icon: Eye,
    change: 15.5,
    comparison: "vs 14,653 last period",
  },
  {
    label: "Visitors",
    value: "6,225",
    icon: Users,
    change: 8.4,
    comparison: "vs 5,732 last period",
  },
  {
    label: "Click",
    value: "2,832",
    icon: MousePointerClick,
    change: -10.5,
    comparison: "vs 3,294 last period",
  },
  {
    label: "Orders",
    value: "1,224",
    icon: ShoppingBag,
    change: 4.4,
    comparison: "vs 1,186 last period",
  },
];

export default function Dashboard() {
  return (
    <main className="w-full h-full flex-1 flex-col space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="text-muted-foreground">
            <Calendar className="size-4" />
            Jan 1, 2025 - Feb 1, 2025
          </Button>
          <Select defaultValue="30">
            <SelectTrigger size="sm" className="w-[140px]">
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <LayoutGrid className="size-4" />
            Add widget
          </Button>
          <Button size="sm">
            <Download className="size-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <TotalProfitCard />
          <BestSellingProducts />
        </div>
        <div className="flex flex-col gap-4">
          <MostDayActive />
          <RepeatCustomerRate />
          <AiAssistantCard />
        </div>
      </div>
    </main>
  );
}
