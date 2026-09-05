import type { ComponentType } from "react";

export interface OptionMeta {
  label: string;
  className?: string;
  icon?: ComponentType<{ className?: string }>;
}

export function mapOptions(map: Map<string, OptionMeta>) {
  return Array.from(map, ([value, meta]) => ({ value, ...meta }));
}
