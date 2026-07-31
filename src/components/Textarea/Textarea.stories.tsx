import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "Write your message",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "20rem" }}>
      <Textarea {...args} />
    </div>
  ),
};

export const Invalid: Story = {
  args: { invalid: true, defaultValue: "Too short" },
  render: (args) => (
    <div style={{ width: "20rem" }}>
      <Textarea {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Can't touch this" },
  render: (args) => (
    <div style={{ width: "20rem" }}>
      <Textarea {...args} />
    </div>
  ),
};
