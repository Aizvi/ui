import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "../Input";
import { FormField } from "./FormField";

describe("FormField", () => {
  it("associates the label with the control", () => {
    render(
      <FormField label="Email">
        <Input />
      </FormField>,
    );
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
  });

  it("associates hint text via aria-describedby", () => {
    render(
      <FormField label="Email" hint="We'll never share this.">
        <Input />
      </FormField>,
    );
    const input = screen.getByRole("textbox", { name: "Email" });
    const describedById = input.getAttribute("aria-describedby");
    expect(describedById).toBeTruthy();
    expect(document.getElementById(describedById!)).toHaveTextContent("We'll never share this.");
  });

  it("marks the control invalid and associates the error message when error is set", () => {
    render(
      <FormField label="Email" error="Enter a valid email address.">
        <Input />
      </FormField>,
    );
    const input = screen.getByRole("textbox", { name: "Email" });
    expect(input).toHaveAttribute("aria-invalid", "true");

    const describedById = input.getAttribute("aria-describedby");
    expect(describedById).toBeTruthy();
    expect(screen.getByRole("alert")).toHaveTextContent("Enter a valid email address.");
  });

  it("marks the control required and shows a required indicator", () => {
    render(
      <FormField label="Email" required>
        <Input />
      </FormField>,
    );
    expect(screen.getByRole("textbox", { name: /Email/ })).toBeRequired();
  });
});
