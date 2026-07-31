import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

const meta = {
  title: "Components/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "0.5rem 1rem",
        background: "var(--ds-color-primary-subtle)",
        borderRadius: "var(--ds-radius-sm)",
      }}
    >
      {children}
    </div>
  );
}

export const Column: Story = {
  render: () => (
    <Stack gap="2">
      <Box>Item one</Box>
      <Box>Item two</Box>
      <Box>Item three</Box>
    </Stack>
  ),
};

export const Row: Story = {
  render: () => (
    <Stack direction="row" gap="2">
      <Box>Item one</Box>
      <Box>Item two</Box>
      <Box>Item three</Box>
    </Stack>
  ),
};

export const JustifyBetween: Story = {
  render: () => (
    <Stack direction="row" justify="between" style={{ width: "20rem" }}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Stack>
  ),
};
