import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
  title: "Foundations/Radius",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = ["xs", "sm", "md", "lg", "xl", "2xl", "full"];

function RadiusSwatch({ step }: { step: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "5rem",
          height: "5rem",
          borderRadius: `var(--ds-radius-${step})`,
          background: "var(--ds-color-primary-subtle)",
          border: "1px solid var(--ds-color-primary-border)",
        }}
      />
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "0.75rem",
          fontFamily: "var(--ds-font-family-mono)",
          color: "var(--ds-color-text-secondary)",
        }}
      >
        {step}
      </div>
    </div>
  );
}

export const Scale: Story = {
  render: () => (
    <div style={{ background: "var(--ds-color-background)", padding: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {STEPS.map((step) => (
          <RadiusSwatch key={step} step={step} />
        ))}
      </div>
    </div>
  ),
};

export const SystemWideOverride: Story = {
  name: "System-wide override (data-radius)",
  render: function Render() {
    const [radius, setRadius] = useState<"none" | "small" | "medium" | "large" | "full">("medium");

    return (
      <div style={{ background: "var(--ds-color-background)", padding: "1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--ds-font-family)",
            fontSize: "0.875rem",
            marginBottom: "1rem",
          }}
        >
          Set <code>data-radius</code> on <code>&lt;html&gt;</code> (or any ancestor) to rescale
          every radius token in the system at once.
        </p>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {(["none", "small", "medium", "large", "full"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setRadius(value);
              }}
              style={{
                padding: "0.375rem 0.75rem",
                fontSize: "0.8125rem",
                fontFamily: "var(--ds-font-family)",
                border: "1px solid var(--ds-color-border)",
                borderRadius: "var(--ds-radius-sm)",
                background:
                  radius === value ? "var(--ds-color-primary)" : "var(--ds-color-surface-raised)",
                color: radius === value ? "white" : "var(--ds-color-text)",
                cursor: "pointer",
              }}
            >
              {value}
            </button>
          ))}
        </div>
        <div data-radius={radius} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {STEPS.map((step) => (
            <RadiusSwatch key={step} step={step} />
          ))}
        </div>
      </div>
    );
  },
};
