import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

function renderTooltip() {
  return render(
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button variant="secondary">Save</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Saved to your library</Tooltip.Content>
    </Tooltip>,
  );
}

describe("Tooltip", () => {
  it("is hidden until the trigger receives focus or hover", () => {
    renderTooltip();
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows on keyboard focus and is accessible via aria-describedby", async () => {
    const user = userEvent.setup();
    renderTooltip();

    await user.tab();
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toHaveTextContent("Saved to your library");

    const trigger = screen.getByRole("button", { name: "Save" });
    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
  });

  it("hides when the trigger loses focus", async () => {
    const user = userEvent.setup();
    renderTooltip();

    await user.tab();
    await screen.findByRole("tooltip");
    await user.tab();

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  it("hides on Escape", async () => {
    const user = userEvent.setup();
    renderTooltip();

    await user.tab();
    await screen.findByRole("tooltip");
    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });
});
