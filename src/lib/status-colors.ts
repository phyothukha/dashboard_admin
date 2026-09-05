export const statusTone = {
  success:
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  warning:
    "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  danger: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400",
  info: "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
  neutral: "bg-zinc-100 text-zinc-600 dark:bg-zinc-500/10 dark:text-zinc-400",
} as const;

export type StatusTone = keyof typeof statusTone;

// Text-only variant (no background) for use inline within existing
// surfaces, e.g. table cell text, where a badge pill isn't appropriate.
export const statusTextTone = {
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-400",
  danger: "text-rose-600 dark:text-rose-400",
  info: "text-sky-600 dark:text-sky-400",
  neutral: "text-zinc-600 dark:text-zinc-400",
} as const;
