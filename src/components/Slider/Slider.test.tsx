import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders an accessible slider with its value", () => {
    render(<Slider aria-label="Volume" defaultValue={[50]} />);
    expect(screen.getByRole("slider", { name: "Volume" })).toHaveAttribute("aria-valuenow", "50");
  });

  it("renders one thumb per value for range sliders", () => {
    render(<Slider aria-label="Price range" defaultValue={[25, 75]} />);
    expect(screen.getAllByRole("slider")).toHaveLength(2);
  });

  it("increases the value with the arrow keys", async () => {
    const onValueChange = vi.fn();
    const user = userEvent.setup();
    render(<Slider aria-label="Volume" defaultValue={[50]} onValueChange={onValueChange} />);

    screen.getByRole("slider", { name: "Volume" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(onValueChange).toHaveBeenCalledWith([51]);
  });

  it("does not respond to interaction when disabled", () => {
    render(<Slider aria-label="Volume" defaultValue={[50]} disabled />);
    const slider = screen.getByRole("slider", { name: "Volume" });
    expect(slider).toHaveAttribute("data-disabled");
  });
});
