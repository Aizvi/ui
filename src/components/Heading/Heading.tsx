import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Heading.module.css";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantic heading level (h1-h6), independent of visual size. @default 2 */
  level?: HeadingLevel;
  /** Visual size. Defaults to a sensible size for the given level. */
  size?: HeadingSize;
}

const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  1: "3xl",
  2: "2xl",
  3: "xl",
  4: "lg",
  5: "md",
  6: "sm",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = 2, size, className, ...props },
  ref,
) {
  const Tag = `h${String(level)}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const resolvedSize = size ?? defaultSizeForLevel[level];
  const sizeClassName = styles[/^\d/.test(resolvedSize) ? `size${resolvedSize}` : resolvedSize];

  return (
    <Tag
      ref={ref}
      className={[styles.root, sizeClassName, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});
