import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import { statusTone } from "@/lib/status-colors";
import { OptionMeta } from "@/lib/option-map";

export const userStatuses = new Map<string, OptionMeta>([
  ["active", { label: "Active", className: statusTone.get("success")! }],
  ["pending", { label: "Pending", className: statusTone.get("warning")! }],
  ["suspended", { label: "Suspended", className: statusTone.get("danger")! }],
]);

export const userRoles = new Map<string, OptionMeta>([
  ["admin", { label: "Admin" }],
  ["editor", { label: "Editor" }],
  ["viewer", { label: "Viewer" }],
  ["member", { label: "Member" }],
]);

export const userSources = new Map<string, OptionMeta>([
  ["google", { label: "Google", icon: IconBrandGoogle }],
  ["facebook", { label: "Facebook", icon: IconBrandFacebook }],
  ["instagram", { label: "Instagram", icon: IconBrandInstagram }],
  ["linkedin", { label: "LinkedIn", icon: IconBrandLinkedin }],
  ["dribbble", { label: "Dribbble", icon: IconBrandDribbble }],
]);
