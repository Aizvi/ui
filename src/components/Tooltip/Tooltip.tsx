"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.css";

export type TooltipProps = RadixTooltip.TooltipProps;
export type TooltipTriggerProps = RadixTooltip.TooltipTriggerProps;
export type TooltipContentProps = RadixTooltip.TooltipContentProps;

function TooltipRoot(props: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props} />
    </RadixTooltip.Provider>
  );
}

function TooltipTrigger(props: TooltipTriggerProps) {
  return <RadixTooltip.Trigger {...props} />;
}

function TooltipContent({ className, children, sideOffset = 6, ...props }: TooltipContentProps) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        className={[styles.content, className].filter(Boolean).join(" ")}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
        <RadixTooltip.Arrow className={styles.arrow} />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
}

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
