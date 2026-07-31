"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import { forwardRef, useId } from "react";
import type { ReactNode } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps extends RadixSwitch.SwitchProps {
  /** Label rendered next to the control, associated via a generated id. */
  label?: ReactNode;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { label, className, id, ...props },
  ref,
) {
  const generatedId = useId();
  const switchId = id ?? (label ? generatedId : undefined);

  const control = (
    <RadixSwitch.Root
      ref={ref}
      id={switchId}
      className={[styles.root, className].filter(Boolean).join(" ")}
      {...props}
    >
      <RadixSwitch.Thumb className={styles.thumb} />
    </RadixSwitch.Root>
  );

  if (!label) {
    return control;
  }

  return (
    <span className={styles.wrapper}>
      {control}
      <label htmlFor={switchId} className={styles.label}>
        {label}
      </label>
    </span>
  );
});
