import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import { statusTone } from "@/lib/status-colors";

export const userStatuses = [
  {
    value: "active",
    label: "Active",
    className: statusTone.success,
  },
  {
    value: "pending",
    label: "Pending",
    className: statusTone.warning,
  },
  {
    value: "suspended",
    label: "Suspended",
    className: statusTone.danger,
  },
];

export const userRoles = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
  { value: "member", label: "Member" },
];

export const userSources = [
  { value: "google", label: "Google", icon: IconBrandGoogle },
  { value: "facebook", label: "Facebook", icon: IconBrandFacebook },
  { value: "instagram", label: "Instagram", icon: IconBrandInstagram },
  { value: "linkedin", label: "LinkedIn", icon: IconBrandLinkedin },
  { value: "dribbble", label: "Dribbble", icon: IconBrandDribbble },
];
