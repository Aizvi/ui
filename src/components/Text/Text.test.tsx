import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders as a paragraph by default", () => {
    render(<Text>Hello</Text>);
    const el = screen.getByText("Hello");
    expect(el.tagName).toBe("P");
  });

  it("renders the requested element via the as prop", () => {
    render(<Text as="span">Hello</Text>);
    expect(screen.getByText("Hello").tagName).toBe("SPAN");
  });

  it("applies size, weight, and color classes", () => {
    render(
      <Text size="lg" weight="bold" color="danger">
        Hello
      </Text>,
    );
    const el = screen.getByText("Hello");
    expect(el.className).toMatch(/lg/);
    expect(el.className).toMatch(/bold/);
    expect(el.className).toMatch(/danger/);
  });
});
