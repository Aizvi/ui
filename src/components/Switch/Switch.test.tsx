import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders an accessible switch associated with its label", () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByRole("switch", { name: "Enable notifications" })).toBeInTheDocument();
  });

  it("toggles on click of the control or its label", async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch label="Enable notifications" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByText("Enable notifications"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("is keyboard operable with Space", async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch label="Enable notifications" onCheckedChange={onCheckedChange} />);

    await user.tab();
    expect(screen.getByRole("switch")).toHaveFocus();
    await user.keyboard(" ");

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch label="Enable notifications" disabled onCheckedChange={onCheckedChange} />);

    const toggle = screen.getByRole("switch");
    expect(toggle).toBeDisabled();
    await user.click(toggle);
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it("works standalone with an explicit aria-label", () => {
    render(<Switch aria-label="Airplane mode" />);
    expect(screen.getByRole("switch", { name: "Airplane mode" })).toBeInTheDocument();
  });
});
