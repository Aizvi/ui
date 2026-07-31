import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text {...args} size="xs" />
      <Text {...args} size="sm" />
      <Text {...args} size="md" />
      <Text {...args} size="lg" />
      <Text {...args} size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text {...args} color="default" />
      <Text {...args} color="secondary" />
      <Text {...args} color="muted" />
      <Text {...args} color="danger" />
      <Text {...args} color="success" />
    </div>
  ),
};

export const Truncated: Story = {
  args: { truncate: true },
  render: (args) => (
    <div style={{ width: "10rem" }}>
      <Text {...args} />
    </div>
  ),
};
