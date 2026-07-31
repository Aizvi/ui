import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  args: {
    type: "single",
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleCollapsible: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Accordion type="single" collapsible defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>What is a design system?</Accordion.Trigger>
          <Accordion.Content>
            A set of reusable components and guidelines for building consistent interfaces.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Why Radix Primitives?</Accordion.Trigger>
          <Accordion.Content>
            They handle accessibility and keyboard interaction so we can focus on visual design.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section one</Accordion.Trigger>
          <Accordion.Content>Content for section one.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section two</Accordion.Trigger>
          <Accordion.Content>Content for section two.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  ),
};
