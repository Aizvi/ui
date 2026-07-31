import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders its children", () => {
    render(
      <Stack>
        <span>Item one</span>
        <span>Item two</span>
      </Stack>,
    );
    expect(screen.getByText("Item one")).toBeInTheDocument();
    expect(screen.getByText("Item two")).toBeInTheDocument();
  });

  it("defaults to a column layout", () => {
    render(<Stack data-testid="stack">Content</Stack>);
    expect(screen.getByTestId("stack").className).toMatch(/column/);
  });

  it("switches to a row layout", () => {
    render(
      <Stack data-testid="stack" direction="row">
        Content
      </Stack>,
    );
    expect(screen.getByTestId("stack").className).toMatch(/row/);
  });

  it("maps the gap prop to the spacing token scale", () => {
    render(
      <Stack data-testid="stack" gap="8">
        Content
      </Stack>,
    );
    expect(screen.getByTestId("stack")).toHaveStyle({ gap: "var(--ds-space-8)" });
  });
});
