import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container {...args} style={{ background: "var(--ds-color-surface)" }}>
      <div style={{ background: "var(--ds-color-primary-subtle)", padding: "1rem" }}>
        Container content, constrained and centered.
      </div>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
        <Container key={size} size={size} style={{ background: "var(--ds-color-surface)" }}>
          <div style={{ background: "var(--ds-color-primary-subtle)", padding: "0.5rem" }}>
            {size}
          </div>
        </Container>
      ))}
    </div>
  ),
};
