import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders its children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies the outlined variant by default", () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId("card").className).toMatch(/outlined/);
  });

  it("applies the elevated variant when requested", () => {
    render(
      <Card data-testid="card" variant="elevated">
        Content
      </Card>,
    );
    expect(screen.getByTestId("card").className).toMatch(/elevated/);
  });
});
