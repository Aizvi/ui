import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "./Slider";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  args: {
    "aria-label": "Volume",
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: [50] },
  render: (args) => (
    <div style={{ width: "16rem" }}>
      <Slider {...args} />
    </div>
  ),
};

export const Range: Story = {
  args: { defaultValue: [25, 75] },
  render: (args) => (
    <div style={{ width: "16rem" }}>
      <Slider {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { defaultValue: [50], disabled: true },
  render: (args) => (
    <div style={{ width: "16rem" }}>
      <Slider {...args} />
    </div>
  ),
};
