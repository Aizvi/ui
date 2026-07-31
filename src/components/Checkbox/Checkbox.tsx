"use client";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { forwardRef, useId } from "react";
import type { ReactNode } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {
  /** Label rendered next to the control, associated via a generated id. */
  label?: ReactNode;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  { label, className, id, ...props },
  ref,
) {
  const generatedId = useId();
  const checkboxId = id ?? (label ? generatedId : undefined);

  const control = (
    <RadixCheckbox.Root
      ref={ref}
      id={checkboxId}
      className={[styles.root, className].filter(Boolean).join(" ")}
      {...props}
    >
      <RadixCheckbox.Indicator className={styles.indicator}>
        {props.checked === "indeterminate" ? <IndeterminateIcon /> : <CheckIcon />}
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );

  if (!label) {
    return control;
  }

  return (
    <span className={styles.wrapper}>
      {control}
      <label htmlFor={checkboxId} className={styles.label}>
        {label}
      </label>
    </span>
  );
});

function CheckIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndeterminateIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
      <path d="M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
