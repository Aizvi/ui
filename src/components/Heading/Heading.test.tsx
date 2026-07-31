import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("defaults to an h2", () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole("heading", { level: 2, name: "Title" })).toBeInTheDocument();
  });

  it("renders the requested semantic level", () => {
    render(<Heading level={1}>Title</Heading>);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
  });

  it("allows visual size to differ from semantic level", () => {
    render(
      <Heading level={1} size="sm">
        Title
      </Heading>,
    );
    const heading = screen.getByRole("heading", { level: 1, name: "Title" });
    expect(heading.tagName).toBe("H1");
    expect(heading.className).toMatch(/sm/);
  });
});
