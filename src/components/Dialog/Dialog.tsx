"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Dialog.module.css";

export type DialogProps = RadixDialog.DialogProps;
export type DialogTriggerProps = RadixDialog.DialogTriggerProps;
export type DialogTitleProps = RadixDialog.DialogTitleProps;
export type DialogDescriptionProps = RadixDialog.DialogDescriptionProps;
export type DialogCloseProps = RadixDialog.DialogCloseProps;
export type DialogFooterProps = ComponentPropsWithoutRef<"div">;

export interface DialogContentProps extends RadixDialog.DialogContentProps {
  /** Renders a close button (✕) in the top-right corner. @default true */
  showCloseButton?: boolean;
}

function DialogRoot(props: DialogProps) {
  return <RadixDialog.Root {...props} />;
}

function DialogTrigger(props: DialogTriggerProps) {
  return <RadixDialog.Trigger {...props} />;
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={styles.overlay} />
      <RadixDialog.Content
        className={[styles.content, className].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <RadixDialog.Close className={styles.closeButton} aria-label="Close">
            <CloseIcon />
          </RadixDialog.Close>
        ) : null}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <RadixDialog.Title className={[styles.title, className].filter(Boolean).join(" ")} {...props} />
  );
}

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <RadixDialog.Description
      className={[styles.description, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function DialogClose(props: DialogCloseProps) {
  return <RadixDialog.Close {...props} />;
}

function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={[styles.footer, className].filter(Boolean).join(" ")} {...props} />;
}

function CloseIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  Footer: DialogFooter,
});
