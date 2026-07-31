import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

export type CardPadding = "none" | "sm" | "md" | "lg";
export type CardVariant = "elevated" | "outlined";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** @default "md" */
  padding?: CardPadding;
  /** @default "outlined" */
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { padding = "md", variant = "outlined", className, ...props },
  ref,
) {
  const classNames = [styles.root, styles[variant], styles[`padding-${padding}`], className]
    .filter(Boolean)
    .join(" ");

  return <div ref={ref} className={classNames} {...props} />;
});
