"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GeometricStarProps {
  className?: string;
  size?: number;
  spin?: boolean;
  strokeColor?: string;
}

/**
 * An eight-point geometric star (khatam) rendered as line art, echoing the
 * interlocking-star tradition of Islamic geometric pattern-making. Used
 * throughout the product as a quiet signature mark: section dividers,
 * loading indicators, and small corner accents on featured cards. Never
 * used decoratively at large scale or filled — always thin, always line art.
 */
export function GeometricStar({
  className,
  size = 40,
  spin = false,
  strokeColor = "currentColor",
}: GeometricStarProps) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", spin && "motion-safe:animate-star-spin-slow", className)}
      aria-hidden="true"
    >
      <g fill="none" stroke={strokeColor} strokeWidth="1.1" strokeLinejoin="round">
        <polygon points="50,4 61,32 91,32 67,50 76,79 50,61 24,79 33,50 9,32 39,32" />
        <polygon
          points="50,4 61,32 91,32 67,50 76,79 50,61 24,79 33,50 9,32 39,32"
          transform="rotate(22.5 50 50)"
          opacity="0.55"
        />
        <circle cx="50" cy="50" r="9" opacity="0.5" />
      </g>
    </motion.svg>
  );
}