import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Popover } from "./Popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Share</Button>
      </Popover.Trigger>
      <Popover.Content>
        <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.9375rem" }}>Share this page</h3>
        <p style={{ margin: 0, fontSize: "0.8125rem", color: "var(--ds-color-text-secondary)" }}>
          Anyone with the link can view this page.
        </p>
      </Popover.Content>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Open</Button>
      </Popover.Trigger>
      <Popover.Content>
        <p style={{ margin: "0 0 0.75rem" }}>Are you sure?</p>
        <Popover.Close asChild>
          <Button size="sm">Close</Button>
        </Popover.Close>
      </Popover.Content>
    </Popover>
  ),
};
