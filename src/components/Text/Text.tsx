import { forwardRef } from "react";
import type { HTMLAttributes, Ref } from "react";
import styles from "./Text.module.css";

export type TextAs = "p" | "span" | "div";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextWeight = "regular" | "medium" | "bold";
export type TextColor = "default" | "secondary" | "muted" | "danger" | "success";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Element rendered. @default "p" */
  as?: TextAs;
  /** @default "md" */
  size?: TextSize;
  /** @default "regular" */
  weight?: TextWeight;
  /** @default "default" */
  color?: TextColor;
  /** Truncates overflowing text with an ellipsis instead of wrapping. */
  truncate?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    as: Tag = "p",
    size = "md",
    weight = "regular",
    color = "default",
    truncate = false,
    className,
    ...props
  },
  ref,
) {
  const classNames = [
    styles.root,
    styles[size],
    styles[weight],
    styles[color],
    truncate ? styles.truncate : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Every value of TextAs maps to an HTMLElement-compatible ref; the exact
  // per-tag ref types (e.g. HTMLDivElement's legacy `align`) don't unify
  // across a polymorphic tag, so the cast is safe here.
  return <Tag ref={ref as Ref<never>} className={classNames} {...props} />;
});
