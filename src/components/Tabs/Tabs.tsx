"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import styles from "./Tabs.module.css";

export type TabsProps = RadixTabs.TabsProps;
export type TabsListProps = RadixTabs.TabsListProps;
export type TabsTriggerProps = RadixTabs.TabsTriggerProps;
export type TabsContentProps = RadixTabs.TabsContentProps;

function TabsRoot({ className, ...props }: TabsProps) {
  return (
    <RadixTabs.Root className={[styles.root, className].filter(Boolean).join(" ")} {...props} />
  );
}

function TabsList({ className, ...props }: TabsListProps) {
  return (
    <RadixTabs.List className={[styles.list, className].filter(Boolean).join(" ")} {...props} />
  );
}

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <RadixTabs.Trigger
      className={[styles.trigger, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <RadixTabs.Content
      className={[styles.content, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
