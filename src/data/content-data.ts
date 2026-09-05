import { statusTone } from "@/lib/status-colors";

export const contentStatuses = [
  {
    value: "published",
    label: "Published",
    className: statusTone.success,
  },
  {
    value: "draft",
    label: "Draft",
    className: statusTone.warning,
  },
  {
    value: "archived",
    label: "Archived",
    className: statusTone.neutral,
  },
];

export const bannerStatuses = [
  {
    value: "active",
    label: "Active",
    className: statusTone.success,
  },
  {
    value: "scheduled",
    label: "Scheduled",
    className: statusTone.info,
  },
  {
    value: "expired",
    label: "Expired",
    className: statusTone.danger,
  },
];

export const recordActions = [
  {
    value: "created",
    label: "Created",
    className: statusTone.success,
  },
  {
    value: "updated",
    label: "Updated",
    className: statusTone.info,
  },
  {
    value: "published",
    label: "Published",
    className: statusTone.success,
  },
  {
    value: "deleted",
    label: "Deleted",
    className: statusTone.danger,
  },
];
