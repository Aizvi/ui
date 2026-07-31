import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./Select";

function renderSelect(onValueChange = vi.fn()) {
  render(
    <Select onValueChange={onValueChange}>
      <Select.Trigger aria-label="Fruit" placeholder="Select a fruit" />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
      </Select.Content>
    </Select>,
  );
  return onValueChange;
}

describe("Select", () => {
  it("shows the placeholder until a value is chosen", () => {
    renderSelect();
    expect(screen.getByRole("combobox", { name: "Fruit" })).toHaveTextContent("Select a fruit");
  });

  it("opens the listbox and selects an option via mouse", async () => {
    const onValueChange = renderSelect();
    const user = userEvent.setup();

    await user.click(screen.getByRole("combobox", { name: "Fruit" }));
    await user.click(await screen.findByRole("option", { name: "Banana" }));

    expect(onValueChange).toHaveBeenCalledWith("banana");
    expect(screen.getByRole("combobox", { name: "Fruit" })).toHaveTextContent("Banana");
  });

  it("is keyboard operable", async () => {
    const onValueChange = renderSelect();
    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("combobox", { name: "Fruit" })).toHaveFocus();

    await user.keyboard("{Enter}");
    await screen.findByRole("listbox");
    await user.keyboard("{ArrowDown}{Enter}");

    expect(onValueChange).toHaveBeenCalledWith("banana");
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(
      <Select disabled>
        <Select.Trigger aria-label="Fruit" placeholder="Select a fruit" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
        </Select.Content>
      </Select>,
    );

    const trigger = screen.getByRole("combobox", { name: "Fruit" });
    expect(trigger).toHaveAttribute("data-disabled");
    await user.click(trigger);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
