"use client";

import { cloneElement, useId } from "react";
import type { ReactElement } from "react";
import styles from "./FormField.module.css";

export interface FormFieldControlProps {
  id?: string | undefined;
  required?: boolean | undefined;
  "aria-invalid"?: boolean | "true" | "false" | undefined;
  "aria-describedby"?: string | undefined;
}

export interface FormFieldProps {
  /** Visible label text, associated with the control via htmlFor/id. */
  label: string;
  /** Supporting text shown below the control when there is no error. */
  hint?: string;
  /** Error message shown below the control; also marks the control invalid. */
  error?: string;
  /** Marks the field as required and passes it through to the control. */
  required?: boolean;
  /** A single form control, e.g. an <Input /> or <Textarea />. */
  children: ReactElement<FormFieldControlProps>;
}

export function FormField({ label, hint, error, required, children }: FormFieldProps) {
  const generatedId = useId();
  const controlId = children.props.id ?? generatedId;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy = [children.props["aria-describedby"], hintId, errorId]
    .filter(Boolean)
    .join(" ");

  const control = cloneElement(children, {
    id: controlId,
    required: required ?? children.props.required,
    "aria-invalid": error ? true : children.props["aria-invalid"],
    "aria-describedby": describedBy.length > 0 ? describedBy : undefined,
  });

  return (
    <div className={styles.root}>
      <label htmlFor={controlId} className={styles.label}>
        {label}
        {required ? (
          <span className={styles.requiredIndicator} aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {control}
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
