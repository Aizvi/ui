import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";

function renderAccordion() {
  return render(
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section one</Accordion.Trigger>
        <Accordion.Content>Content one</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section two</Accordion.Trigger>
        <Accordion.Content>Content two</Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  );
}

describe("Accordion", () => {
  it("collapses all items by default", () => {
    renderAccordion();
    expect(screen.getByRole("button", { name: "Section one" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("expands an item on trigger click", async () => {
    const user = userEvent.setup();
    renderAccordion();

    await user.click(screen.getByRole("button", { name: "Section one" }));

    expect(screen.getByRole("button", { name: "Section one" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText("Content one")).toBeVisible();
  });

  it("collapses the open item when its trigger is clicked again (collapsible)", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByRole("button", { name: "Section one" });
    await user.click(trigger);
    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("only allows one item open at a time in single mode", async () => {
    const user = userEvent.setup();
    renderAccordion();

    await user.click(screen.getByRole("button", { name: "Section one" }));
    await user.click(screen.getByRole("button", { name: "Section two" }));

    expect(screen.getByRole("button", { name: "Section one" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("button", { name: "Section two" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("is keyboard navigable with arrow keys", async () => {
    const user = userEvent.setup();
    renderAccordion();

    screen.getByRole("button", { name: "Section one" }).focus();
    await user.keyboard("{ArrowDown}");

    expect(screen.getByRole("button", { name: "Section two" })).toHaveFocus();
  });
});
