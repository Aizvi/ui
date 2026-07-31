import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "The quick brown fox",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllLevels: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading {...args} level={1} />
      <Heading {...args} level={2} />
      <Heading {...args} level={3} />
      <Heading {...args} level={4} />
      <Heading {...args} level={5} />
      <Heading {...args} level={6} />
    </div>
  ),
};

export const SizeIndependentOfLevel: Story = {
  args: { level: 1, size: "sm" },
};
