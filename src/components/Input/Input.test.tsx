import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders an accessible textbox", () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
  });

  it("accepts typed input", async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Email" />);
    const input = screen.getByRole("textbox", { name: "Email" });

    await user.type(input, "hello@example.com");

    expect(input).toHaveValue("hello@example.com");
  });

  it("marks itself invalid via the invalid prop", () => {
    render(<Input aria-label="Email" invalid />);
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute("aria-invalid", "true");
  });

  it("respects an explicit aria-invalid prop", () => {
    render(<Input aria-label="Email" aria-invalid="true" />);
    expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute("aria-invalid", "true");
  });

  it("disables the input and blocks typing when disabled", async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Email" disabled />);
    const input = screen.getByRole("textbox", { name: "Email" });

    expect(input).toBeDisabled();
    await user.type(input, "hello");
    expect(input).toHaveValue("");
  });

  it("forwards a ref to the underlying input element", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input aria-label="Email" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
