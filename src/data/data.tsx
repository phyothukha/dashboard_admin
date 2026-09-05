import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react";

import { OptionMeta } from "@/lib/option-map";

export const labels = new Map<string, OptionMeta>([
  ["bug", { label: "Bug" }],
  ["feature", { label: "Feature" }],
  ["documentation", { label: "Documentation" }],
]);

export const statuses = new Map<string, OptionMeta>([
  ["backlog", { label: "Backlog", icon: HelpCircle }],
  ["todo", { label: "Todo", icon: Circle }],
  ["in progress", { label: "In Progress", icon: Timer }],
  ["done", { label: "Done", icon: CheckCircle }],
  ["canceled", { label: "Canceled", icon: CircleOff }],
]);

export const priorities = new Map<string, OptionMeta>([
  ["low", { label: "Low", icon: ArrowDown }],
  ["medium", { label: "Medium", icon: ArrowRight }],
  ["high", { label: "High", icon: ArrowUp }],
]);
