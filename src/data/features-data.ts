import { statusTone } from "@/lib/status-colors";
import { OptionMeta, mapOptions } from "@/lib/option-map";

export type { OptionMeta };
export { mapOptions };

export const goalCategories = new Map<string, OptionMeta>([
  ["sales", { label: "Sales" }],
  ["marketing", { label: "Marketing" }],
  ["product", { label: "Product" }],
  ["engineering", { label: "Engineering" }],
  ["support", { label: "Support" }],
]);

export const goalStatuses = new Map<string, OptionMeta>([
  ["on-track", { label: "On Track", className: statusTone.get("success")! }],
  ["at-risk", { label: "At Risk", className: statusTone.get("warning")! }],
  ["completed", { label: "Completed", className: statusTone.get("info")! }],
  ["missed", { label: "Missed", className: statusTone.get("danger")! }],
]);

export const appCategories = new Map<string, OptionMeta>([
  ["productivity", { label: "Productivity" }],
  ["communication", { label: "Communication" }],
  ["analytics", { label: "Analytics" }],
  ["finance", { label: "Finance" }],
  ["design", { label: "Design" }],
]);

export const appStatuses = new Map<string, OptionMeta>([
  ["installed", { label: "Installed", className: statusTone.get("success")! }],
  [
    "update-available",
    { label: "Update Available", className: statusTone.get("warning")! },
  ],
  ["available", { label: "Available", className: statusTone.get("neutral")! }],
]);

export const chatChannels = new Map<string, OptionMeta>([
  ["direct", { label: "Direct" }],
  ["team", { label: "Team" }],
  ["support", { label: "Support" }],
]);

export const chatStatuses = new Map<string, OptionMeta>([
  ["online", { label: "Online", className: statusTone.get("success")! }],
  ["away", { label: "Away", className: statusTone.get("warning")! }],
  ["offline", { label: "Offline", className: statusTone.get("neutral")! }],
]);

export const calendarEventTypes = new Map<string, OptionMeta>([
  ["meeting", { label: "Meeting" }],
  ["deadline", { label: "Deadline" }],
  ["reminder", { label: "Reminder" }],
  ["event", { label: "Event" }],
]);

export const calendarEventStatuses = new Map<string, OptionMeta>([
  ["upcoming", { label: "Upcoming", className: statusTone.get("info")! }],
  ["completed", { label: "Completed", className: statusTone.get("success")! }],
  ["cancelled", { label: "Cancelled", className: statusTone.get("danger")! }],
]);

export const productCategories = new Map<string, OptionMeta>([
  ["electronics", { label: "Electronics" }],
  ["apparel", { label: "Apparel" }],
  ["home", { label: "Home" }],
  ["beauty", { label: "Beauty" }],
  ["sports", { label: "Sports" }],
]);

export const productStatuses = new Map<string, OptionMeta>([
  ["in-stock", { label: "In Stock", className: statusTone.get("success")! }],
  ["low-stock", { label: "Low Stock", className: statusTone.get("warning")! }],
  [
    "out-of-stock",
    { label: "Out of Stock", className: statusTone.get("danger")! },
  ],
]);

export const projectStatuses = new Map<string, OptionMeta>([
  ["planning", { label: "Planning", className: statusTone.get("neutral")! }],
  ["in-progress", { label: "In Progress", className: statusTone.get("info")! }],
  ["completed", { label: "Completed", className: statusTone.get("success")! }],
  ["on-hold", { label: "On Hold", className: statusTone.get("warning")! }],
]);
