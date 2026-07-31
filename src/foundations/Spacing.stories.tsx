import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Spacing",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = [
  "0",
  "0_5",
  "1",
  "1_5",
  "2",
  "2_5",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "10",
  "12",
  "16",
  "20",
  "24",
];

export const Scale: Story = {
  render: () => (
    <div style={{ background: "var(--ds-color-background)", padding: "1.5rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {STEPS.map((step) => (
          <div key={step} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <code
              style={{
                width: "5rem",
                fontSize: "0.75rem",
                color: "var(--ds-color-text-secondary)",
                fontFamily: "var(--ds-font-family-mono)",
              }}
            >
              space-{step}
            </code>
            <div
              style={{
                width: `var(--ds-space-${step})`,
                height: "1rem",
                background: "var(--ds-color-primary)",
                borderRadius: "var(--ds-radius-xs)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
