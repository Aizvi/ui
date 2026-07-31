import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders an accessible textbox", () => {
    render(<Textarea aria-label="Message" />);
    expect(screen.getByRole("textbox", { name: "Message" })).toBeInTheDocument();
  });

  it("accepts multi-line typed input", async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Message" />);
    const textarea = screen.getByRole("textbox", { name: "Message" });

    await user.type(textarea, "line one{Enter}line two");

    expect(textarea).toHaveValue("line one\nline two");
  });

  it("marks itself invalid via the invalid prop", () => {
    render(<Textarea aria-label="Message" invalid />);
    expect(screen.getByRole("textbox", { name: "Message" })).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("disables the textarea and blocks typing when disabled", async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Message" disabled />);
    const textarea = screen.getByRole("textbox", { name: "Message" });

    expect(textarea).toBeDisabled();
    await user.type(textarea, "hello");
    expect(textarea).toHaveValue("");
  });

  it("forwards a ref to the underlying textarea element", () => {
    const ref = createRef<HTMLTextAreaElement>();
    render(<Textarea aria-label="Message" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
