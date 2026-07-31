import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <Select.Trigger aria-label="Fruit" placeholder="Select a fruit" />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <Select.Trigger aria-label="Food" placeholder="Select a food" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Select>
      <Select.Trigger aria-label="Fruit" placeholder="Select a fruit" />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana" disabled>
          Banana (out of stock)
        </Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <Select.Trigger aria-label="Fruit" placeholder="Select a fruit" />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
      </Select.Content>
    </Select>
  ),
};
