import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "../Button";
import { DropdownMenu } from "./DropdownMenu";

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
        <DropdownMenu.Item>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithGroups: Story = {
  render: function Render() {
    const [showHidden, setShowHidden] = useState(false);
    const [sort, setSort] = useState("name");

    return (
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="secondary">View options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Display</DropdownMenu.Label>
          <DropdownMenu.CheckboxItem checked={showHidden} onCheckedChange={setShowHidden}>
            Show hidden files
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.Separator />
          <DropdownMenu.Label>Sort by</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={sort} onValueChange={setSort}>
            <DropdownMenu.RadioItem value="name">Name</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="date">Date modified</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};
