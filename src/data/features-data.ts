import { statusTone } from "@/lib/status-colors";

export const goalCategories = [
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "product", label: "Product" },
  { value: "engineering", label: "Engineering" },
  { value: "support", label: "Support" },
];

export const goalStatuses = [
  { value: "on-track", label: "On Track", className: statusTone.success },
  { value: "at-risk", label: "At Risk", className: statusTone.warning },
  { value: "completed", label: "Completed", className: statusTone.info },
  { value: "missed", label: "Missed", className: statusTone.danger },
];

export const appCategories = [
  { value: "productivity", label: "Productivity" },
  { value: "communication", label: "Communication" },
  { value: "analytics", label: "Analytics" },
  { value: "finance", label: "Finance" },
  { value: "design", label: "Design" },
];

export const appStatuses = [
  { value: "installed", label: "Installed", className: statusTone.success },
  {
    value: "update-available",
    label: "Update Available",
    className: statusTone.warning,
  },
  { value: "available", label: "Available", className: statusTone.neutral },
];

export const chatChannels = [
  { value: "direct", label: "Direct" },
  { value: "team", label: "Team" },
  { value: "support", label: "Support" },
];

export const chatStatuses = [
  { value: "online", label: "Online", className: statusTone.success },
  { value: "away", label: "Away", className: statusTone.warning },
  { value: "offline", label: "Offline", className: statusTone.neutral },
];

export const calendarEventTypes = [
  { value: "meeting", label: "Meeting" },
  { value: "deadline", label: "Deadline" },
  { value: "reminder", label: "Reminder" },
  { value: "event", label: "Event" },
];

export const calendarEventStatuses = [
  { value: "upcoming", label: "Upcoming", className: statusTone.info },
  { value: "completed", label: "Completed", className: statusTone.success },
  { value: "cancelled", label: "Cancelled", className: statusTone.danger },
];

export const productCategories = [
  { value: "electronics", label: "Electronics" },
  { value: "apparel", label: "Apparel" },
  { value: "home", label: "Home" },
  { value: "beauty", label: "Beauty" },
  { value: "sports", label: "Sports" },
];

export const productStatuses = [
  { value: "in-stock", label: "In Stock", className: statusTone.success },
  { value: "low-stock", label: "Low Stock", className: statusTone.warning },
  {
    value: "out-of-stock",
    label: "Out of Stock",
    className: statusTone.danger,
  },
];

export const projectStatuses = [
  { value: "planning", label: "Planning", className: statusTone.neutral },
  { value: "in-progress", label: "In Progress", className: statusTone.info },
  { value: "completed", label: "Completed", className: statusTone.success },
  { value: "on-hold", label: "On Hold", className: statusTone.warning },
];
