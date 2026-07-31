import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import styles from "./Container.module.css";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum content width. @default "lg" */
  size?: ContainerSize;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { size = "lg", className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={[styles.root, styles[size], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});
