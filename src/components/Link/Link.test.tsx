import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
  it("renders an accessible link", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
  });

  it("does not add target/rel for internal links by default", () => {
    render(<Link href="/about">About</Link>);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("secures external links with target=_blank and rel=noopener noreferrer", () => {
    render(
      <Link href="https://example.com" external>
        Docs
      </Link>,
    );
    const link = screen.getByRole("link", { name: /Docs/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("treats an explicit target=_blank as external even without the external prop", () => {
    render(
      <Link href="https://example.com" target="_blank">
        Docs
      </Link>,
    );
    expect(screen.getByRole("link", { name: /Docs/ })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("forwards a ref to the underlying anchor element", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(
      <Link href="/about" ref={ref}>
        About
      </Link>,
    );
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });
});
