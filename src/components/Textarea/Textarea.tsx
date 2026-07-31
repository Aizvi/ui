"use client";

import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Marks the textarea as invalid, styling it and setting aria-invalid. */
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid = false, className, disabled, "aria-invalid": ariaInvalid, ...props },
  ref,
) {
  const isInvalid = invalid || ariaInvalid === true || ariaInvalid === "true";

  const classNames = [styles.root, isInvalid ? styles.invalid : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea
      ref={ref}
      className={classNames}
      disabled={disabled}
      aria-invalid={isInvalid || undefined}
      {...props}
    />
  );
});
