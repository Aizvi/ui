import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "../Button";
import { Popover } from "./Popover";

function renderPopover() {
  return render(
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Share</Button>
      </Popover.Trigger>
      <Popover.Content>
        <p>Anyone with the link can view this page.</p>
        <Popover.Close asChild>
          <Button size="sm">Close</Button>
        </Popover.Close>
      </Popover.Content>
    </Popover>,
  );
}

describe("Popover", () => {
  it("is closed until the trigger is activated", () => {
    renderPopover();
    expect(screen.queryByText("Anyone with the link can view this page.")).not.toBeInTheDocument();
  });

  it("opens on trigger click and moves focus into the content", async () => {
    const user = userEvent.setup();
    renderPopover();

    const trigger = screen.getByRole("button", { name: "Share" });
    await user.click(trigger);

    const content = await screen.findByText("Anyone with the link can view this page.");
    expect(content).toBeInTheDocument();
    await waitFor(() => {
      expect(content.parentElement).toContainElement(document.activeElement as HTMLElement);
    });
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    renderPopover();

    const trigger = screen.getByRole("button", { name: "Share" });
    await user.click(trigger);
    await screen.findByText("Anyone with the link can view this page.");

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(
        screen.queryByText("Anyone with the link can view this page."),
      ).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
  });

  it("closes when a Popover.Close control is activated", async () => {
    const user = userEvent.setup();
    renderPopover();

    await user.click(screen.getByRole("button", { name: "Share" }));
    await screen.findByText("Anyone with the link can view this page.");

    await user.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(
        screen.queryByText("Anyone with the link can view this page."),
      ).not.toBeInTheDocument();
    });
  });
});
