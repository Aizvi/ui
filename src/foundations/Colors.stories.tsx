import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = Array.from({ length: 12 }, (_, i) => i + 1);

function Scale({ name, prefix }: { name: string; prefix: string }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3
        style={{
          margin: "0 0 0.75rem",
          fontSize: "0.9375rem",
          fontFamily: "var(--ds-font-family)",
        }}
      >
        {name}{" "}
        <code style={{ fontSize: "0.75rem", color: "var(--ds-color-text-muted)" }}>
          --{prefix}-*
        </code>
      </h3>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {STEPS.map((step) => (
          <div key={step} style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                height: "3rem",
                borderRadius: "var(--ds-radius-sm)",
                background: `var(--${prefix}-${String(step)})`,
                border: "1px solid var(--ds-color-border)",
              }}
            />
            <div
              style={{
                marginTop: "0.25rem",
                fontSize: "0.6875rem",
                color: "var(--ds-color-text-muted)",
                fontFamily: "var(--ds-font-family-mono)",
              }}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticSwatch({ label, token }: { label: string; token: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div
        style={{
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "var(--ds-radius-sm)",
          background: `var(${token})`,
          border: "1px solid var(--ds-color-border)",
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: "0.8125rem", fontFamily: "var(--ds-font-family)" }}>{label}</div>
        <code style={{ fontSize: "0.6875rem", color: "var(--ds-color-text-muted)" }}>{token}</code>
      </div>
    </div>
  );
}

export const Scales: Story = {
  render: () => (
    <div style={{ background: "var(--ds-color-background)", padding: "1.5rem" }}>
      <Scale name="Gray" prefix="gray" />
      <Scale name="Blue (accent)" prefix="blue" />
      <Scale name="Red (danger)" prefix="red" />
      <Scale name="Green (success)" prefix="green" />
      <Scale name="Amber (warning)" prefix="amber" />
    </div>
  ),
};

export const SemanticTokens: Story = {
  render: () => (
    <div
      style={{
        background: "var(--ds-color-background)",
        padding: "1.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
        gap: "1rem",
      }}
    >
      <SemanticSwatch label="Background" token="--ds-color-background" />
      <SemanticSwatch label="Surface" token="--ds-color-surface" />
      <SemanticSwatch label="Surface raised" token="--ds-color-surface-raised" />
      <SemanticSwatch label="Border" token="--ds-color-border" />
      <SemanticSwatch label="Primary" token="--ds-color-primary" />
      <SemanticSwatch label="Primary hover" token="--ds-color-primary-hover" />
      <SemanticSwatch label="Primary subtle" token="--ds-color-primary-subtle" />
      <SemanticSwatch label="Danger" token="--ds-color-danger" />
      <SemanticSwatch label="Success" token="--ds-color-success" />
      <SemanticSwatch label="Warning" token="--ds-color-warning" />
    </div>
  ),
};
