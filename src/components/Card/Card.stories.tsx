import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ width: "20rem" }}>
      <Heading level={3} size="md">
        Plan: Pro
      </Heading>
      <Text color="secondary">Billed monthly. Cancel anytime.</Text>
    </Card>
  ),
};

export const Elevated: Story = {
  args: { variant: "elevated" },
  render: (args) => (
    <Card {...args} style={{ width: "20rem" }}>
      <Heading level={3} size="md">
        Plan: Pro
      </Heading>
      <Text color="secondary">Billed monthly. Cancel anytime.</Text>
    </Card>
  ),
};
