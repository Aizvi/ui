import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Tabs defaultValue="account">
        <Tabs.List aria-label="Manage your account">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Trigger value="team" disabled>
            Team
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Update your account details here.</Tabs.Content>
        <Tabs.Content value="password">Change your password here.</Tabs.Content>
        <Tabs.Content value="team">Manage your team here.</Tabs.Content>
      </Tabs>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ width: "24rem" }}>
      <Tabs defaultValue="account" orientation="vertical">
        <Tabs.List aria-label="Manage your account">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" style={{ paddingLeft: "1rem" }}>
          Update your account details here.
        </Tabs.Content>
        <Tabs.Content value="password" style={{ paddingLeft: "1rem" }}>
          Change your password here.
        </Tabs.Content>
      </Tabs>
    </div>
  ),
};
