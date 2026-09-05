import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeAgo(date: string | Date) {
  const target = typeof date === "string" ? new Date(date) : date;
  const seconds = Math.round((Date.now() - target.getTime()) / 1000);

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  for (const [unit, unitSeconds] of units) {
    const value = Math.floor(seconds / unitSeconds);
    if (value >= 1) {
      const rtf = new Intl.RelativeTimeFormat("en", { numeric: "always" });
      return rtf.format(-value, unit);
    }
  }

  return "just now";
}
