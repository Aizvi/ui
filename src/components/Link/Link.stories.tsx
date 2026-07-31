import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  args: {
    href: "#",
    children: "Learn more",
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
  args: { href: "https://example.com", external: true, children: "View documentation" },
};
