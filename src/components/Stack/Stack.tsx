import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import styles from "./Stack.module.css";

export type StackDirection = "row" | "column";
export type StackAlign = "start" | "center" | "end" | "stretch";
export type StackJustify = "start" | "center" | "end" | "between";
export type StackGap = "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** @default "column" */
  direction?: StackDirection;
  /** Spacing between children, mapped to the --ds-space-* scale. @default "4" */
  gap?: StackGap;
  /** @default "stretch" */
  align?: StackAlign;
  /** @default "start" */
  justify?: StackJustify;
  /** Allows children to wrap onto multiple lines. */
  wrap?: boolean;
}

const justifyValue: Record<StackJustify, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
};

const alignValue: Record<StackAlign, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  {
    direction = "column",
    gap = "4",
    align = "stretch",
    justify = "start",
    wrap = false,
    className,
    style,
    ...props
  },
  ref,
) {
  const classNames = [
    styles.root,
    direction === "row" ? styles.row : styles.column,
    wrap ? styles.wrap : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle: CSSProperties = {
    gap: `var(--ds-space-${gap})`,
    alignItems: alignValue[align],
    justifyContent: justifyValue[justify],
    ...style,
  };

  return (
    <div
      ref={ref}
      className={[classNames, className].filter(Boolean).join(" ")}
      style={mergedStyle}
      {...props}
    />
  );
});
