"use client";

import * as RadixPopover from "@radix-ui/react-popover";
import styles from "./Popover.module.css";

export type PopoverProps = RadixPopover.PopoverProps;
export type PopoverTriggerProps = RadixPopover.PopoverTriggerProps;
export type PopoverContentProps = RadixPopover.PopoverContentProps;
export type PopoverCloseProps = RadixPopover.PopoverCloseProps;
export type PopoverAnchorProps = RadixPopover.PopoverAnchorProps;

function PopoverRoot(props: PopoverProps) {
  return <RadixPopover.Root {...props} />;
}

function PopoverTrigger(props: PopoverTriggerProps) {
  return <RadixPopover.Trigger {...props} />;
}

function PopoverContent({ className, sideOffset = 6, ...props }: PopoverContentProps) {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        className={[styles.content, className].filter(Boolean).join(" ")}
        sideOffset={sideOffset}
        {...props}
      />
    </RadixPopover.Portal>
  );
}

function PopoverClose(props: PopoverCloseProps) {
  return <RadixPopover.Close {...props} />;
}

function PopoverAnchor(props: PopoverAnchorProps) {
  return <RadixPopover.Anchor {...props} />;
}

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Close: PopoverClose,
  Anchor: PopoverAnchor,
});
