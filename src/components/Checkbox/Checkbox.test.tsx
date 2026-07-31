import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders an accessible checkbox associated with its label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole("checkbox", { name: "Accept terms" })).toBeInTheDocument();
  });

  it("toggles on click and click on the label", async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Accept terms" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByText("Accept terms"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("is keyboard operable with Space", async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Accept terms" onCheckedChange={onCheckedChange} />);

    await user.tab();
    expect(screen.getByRole("checkbox")).toHaveFocus();
    await user.keyboard(" ");

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("supports an indeterminate state", () => {
    render(
      <Checkbox label="Select all" checked="indeterminate" onCheckedChange={() => undefined} />,
    );
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-checked", "mixed");
  });

  it("does not toggle when disabled", async () => {
    const onCheckedChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Accept terms" disabled onCheckedChange={onCheckedChange} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
    await user.click(checkbox);
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it("works standalone with an explicit aria-label", () => {
    render(<Checkbox aria-label="Select row" />);
    expect(screen.getByRole("checkbox", { name: "Select row" })).toBeInTheDocument();
  });
});
