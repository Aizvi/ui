import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="secondary">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Saved to your library</Tooltip.Content>
    </Tooltip>
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <Tooltip defaultOpen>
      <Tooltip.Trigger asChild>
        <Button variant="secondary">Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Saved to your library</Tooltip.Content>
    </Tooltip>
  ),
};
