import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../Input";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Email",
    children: <Input type="email" placeholder="you@example.com" />,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "18rem" }}>
      <FormField label="Email" hint="We'll only use this to send order updates.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div style={{ width: "18rem" }}>
      <FormField label="Email" required>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: "18rem" }}>
      <FormField label="Email" error="Enter a valid email address." required>
        <Input type="email" defaultValue="not-an-email" />
      </FormField>
    </div>
  ),
};
