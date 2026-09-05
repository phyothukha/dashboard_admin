"use client";

import { motion } from "framer-motion";

export function NavActiveIndicator() {
  return (
    <motion.div
      layoutId="sidebar-active-indicator"
      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
      className="absolute -left-2 top-0 right-0 bottom-0 rounded-r-lg bg-primary/10"
    >
      <span className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-primary" />
    </motion.div>
  );
}
