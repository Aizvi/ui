"use client";

import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";
import styles from "./DropdownMenu.module.css";

export type DropdownMenuProps = RadixDropdownMenu.DropdownMenuProps;
export type DropdownMenuTriggerProps = RadixDropdownMenu.DropdownMenuTriggerProps;
export type DropdownMenuContentProps = RadixDropdownMenu.DropdownMenuContentProps;
export type DropdownMenuItemProps = RadixDropdownMenu.DropdownMenuItemProps;
export type DropdownMenuCheckboxItemProps = RadixDropdownMenu.DropdownMenuCheckboxItemProps;
export type DropdownMenuRadioGroupProps = RadixDropdownMenu.DropdownMenuRadioGroupProps;
export type DropdownMenuRadioItemProps = RadixDropdownMenu.DropdownMenuRadioItemProps;
export type DropdownMenuLabelProps = RadixDropdownMenu.DropdownMenuLabelProps;
export type DropdownMenuSeparatorProps = RadixDropdownMenu.DropdownMenuSeparatorProps;

function DropdownMenuRoot(props: DropdownMenuProps) {
  return <RadixDropdownMenu.Root {...props} />;
}

function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <RadixDropdownMenu.Trigger {...props} />;
}

function DropdownMenuContent({ className, sideOffset = 4, ...props }: DropdownMenuContentProps) {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        className={[styles.content, className].filter(Boolean).join(" ")}
        sideOffset={sideOffset}
        {...props}
      />
    </RadixDropdownMenu.Portal>
  );
}

function DropdownMenuItem({ className, ...props }: DropdownMenuItemProps) {
  return (
    <RadixDropdownMenu.Item
      className={[styles.item, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <RadixDropdownMenu.CheckboxItem
      className={[styles.item, styles.indicatorItem, className].filter(Boolean).join(" ")}
      {...props}
    >
      <RadixDropdownMenu.ItemIndicator className={styles.itemIndicator}>
        <CheckIcon />
      </RadixDropdownMenu.ItemIndicator>
      {children}
    </RadixDropdownMenu.CheckboxItem>
  );
}

function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) {
  return <RadixDropdownMenu.RadioGroup {...props} />;
}

function DropdownMenuRadioItem({ className, children, ...props }: DropdownMenuRadioItemProps) {
  return (
    <RadixDropdownMenu.RadioItem
      className={[styles.item, styles.indicatorItem, className].filter(Boolean).join(" ")}
      {...props}
    >
      <RadixDropdownMenu.ItemIndicator className={styles.itemIndicator}>
        <DotIcon />
      </RadixDropdownMenu.ItemIndicator>
      {children}
    </RadixDropdownMenu.RadioItem>
  );
}

function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelProps) {
  return (
    <RadixDropdownMenu.Label
      className={[styles.label, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <RadixDropdownMenu.Separator
      className={[styles.separator, className].filter(Boolean).join(" ")}
      {...props}
    />
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

function DotIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="8" height="8" fill="currentColor" aria-hidden="true">
      <circle cx="8" cy="8" r="4" />
    </svg>
  );
}

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
});
