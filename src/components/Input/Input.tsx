"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Size of the input. @default "md" */
  size?: InputSize;
  /** Marks the input as invalid, styling it and setting aria-invalid. */
  invalid?: boolean;
  /** Content rendered before the input, e.g. an icon. */
  startAdornment?: ReactNode;
  /** Content rendered after the input, e.g. an icon or unit. */
  endAdornment?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = "md",
    invalid = false,
    startAdornment,
    endAdornment,
    className,
    disabled,
    "aria-invalid": ariaInvalid,
    ...props
  },
  ref,
) {
  const isInvalid = invalid || ariaInvalid === true || ariaInvalid === "true";

  const wrapperClassName = [
    styles.wrapper,
    styles[size],
    isInvalid ? styles.invalid : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={wrapperClassName}>
      {startAdornment ? <span className={styles.adornment}>{startAdornment}</span> : null}
      <input
        ref={ref}
        className={styles.input}
        disabled={disabled}
        aria-invalid={isInvalid || undefined}
        {...props}
      />
      {endAdornment ? <span className={styles.adornment}>{endAdornment}</span> : null}
    </span>
  );
});
