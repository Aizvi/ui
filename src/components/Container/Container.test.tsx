import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders its children", () => {
    render(<Container>Content</Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("defaults to the lg size", () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId("container").className).toMatch(/lg/);
  });

  it("applies the requested size", () => {
    render(
      <Container data-testid="container" size="sm">
        Content
      </Container>,
    );
    expect(screen.getByTestId("container").className).toMatch(/sm/);
  });
});
