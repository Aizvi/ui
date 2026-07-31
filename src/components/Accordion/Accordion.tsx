"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import type { ReactNode } from "react";
import styles from "./Accordion.module.css";

export type AccordionProps =
  RadixAccordion.AccordionSingleProps | RadixAccordion.AccordionMultipleProps;
export type AccordionItemProps = RadixAccordion.AccordionItemProps;
export type AccordionContentProps = RadixAccordion.AccordionContentProps;

export type AccordionTriggerProps = RadixAccordion.AccordionTriggerProps;

function AccordionRoot({ className, ...props }: AccordionProps) {
  return (
    <RadixAccordion.Root
      className={[styles.root, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <RadixAccordion.Item
      className={[styles.item, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  return (
    <RadixAccordion.Header className={styles.header}>
      <RadixAccordion.Trigger
        className={[styles.trigger, className].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
        <ChevronDownIcon />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <RadixAccordion.Content
      className={[styles.content, className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className={styles.contentInner}>{children}</div>
    </RadixAccordion.Content>
  );
}

function ChevronDownIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
      className={styles.chevron}
    >
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

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
