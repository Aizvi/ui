import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../Button";
import { DropdownMenu } from "./DropdownMenu";

function renderMenu(onSelect = vi.fn()) {
  render(
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="secondary">Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={onSelect}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
        <DropdownMenu.Item>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>,
  );
  return onSelect;
}

describe("DropdownMenu", () => {
  it("is closed until the trigger is activated", () => {
    renderMenu();
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("opens the menu and lists its items", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole("button", { name: "Options" }));

    expect(await screen.findByRole("menu")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Edit" })).toBeInTheDocument();
  });

  it("selects an item via click and closes the menu", async () => {
    const onSelect = renderMenu();
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Options" }));
    await user.click(await screen.findByRole("menuitem", { name: "Edit" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });

  it("is keyboard navigable and marks disabled items unselectable", async () => {
    const onSelect = renderMenu();
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Options" }));
    await screen.findByRole("menu");

    expect(screen.getByRole("menuitem", { name: "Archive" })).toHaveAttribute("data-disabled");

    await user.keyboard("{ArrowDown}{Enter}");
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    renderMenu();

    const trigger = screen.getByRole("button", { name: "Options" });
    await user.click(trigger);
    await screen.findByRole("menu");

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
  });
});
