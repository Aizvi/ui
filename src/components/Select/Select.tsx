"use client";

import * as RadixSelect from "@radix-ui/react-select";
import type { ReactNode } from "react";
import styles from "./Select.module.css";

export type SelectProps = RadixSelect.SelectProps;
export type SelectItemProps = RadixSelect.SelectItemProps;
export type SelectGroupProps = RadixSelect.SelectGroupProps;
export type SelectLabelProps = RadixSelect.SelectLabelProps;
export type SelectSeparatorProps = RadixSelect.SelectSeparatorProps;

export interface SelectTriggerProps extends RadixSelect.SelectTriggerProps {
  /** Text shown when no value is selected. */
  placeholder?: string;
}

export type SelectContentProps = RadixSelect.SelectContentProps;

function SelectRoot(props: SelectProps) {
  return <RadixSelect.Root {...props} />;
}

function SelectTrigger({ className, placeholder, children, ...props }: SelectTriggerProps) {
  return (
    <RadixSelect.Trigger
      className={[styles.trigger, className].filter(Boolean).join(" ")}
      {...props}
    >
      <RadixSelect.Value placeholder={placeholder}>{children}</RadixSelect.Value>
      <RadixSelect.Icon className={styles.icon}>
        <ChevronDownIcon />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  sideOffset = 4,
  ...props
}: SelectContentProps) {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        className={[styles.content, className].filter(Boolean).join(" ")}
        position={position}
        sideOffset={sideOffset}
        {...props}
      >
        <RadixSelect.ScrollUpButton className={styles.scrollButton}>
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className={styles.viewport}>{children}</RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className={styles.scrollButton}>
          <ChevronDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
}

function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <RadixSelect.Item className={[styles.item, className].filter(Boolean).join(" ")} {...props}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className={styles.itemIndicator}>
        <CheckIcon />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
}

function SelectGroup({ className, ...props }: SelectGroupProps) {
  return (
    <RadixSelect.Group className={[styles.group, className].filter(Boolean).join(" ")} {...props} />
  );
}

function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <RadixSelect.Label className={[styles.label, className].filter(Boolean).join(" ")} {...props} />
  );
}

function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <RadixSelect.Separator
      className={[styles.separator, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function ChevronDownIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
      <path
        d="M3.5 6l4.5 4 4.5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
      <path
        d="M3.5 10l4.5-4 4.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Label: SelectLabel,
  Separator: SelectSeparator,
});
