import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("exposes exactly one top-level heading (single h1) for SEO/a11y", () => {
    render(<LandingPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("renders the header, main, and footer landmarks", () => {
    render(<LandingPage />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders primary navigation with meaningful link text", () => {
    render(<LandingPage />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(within(nav).getByRole("link", { name: "Features" })).toHaveAttribute(
      "href",
      "#features",
    );
    expect(within(nav).getByRole("link", { name: "FAQ" })).toHaveAttribute("href", "#faq");
  });

  it("marks external links so they open safely in a new tab", () => {
    render(<LandingPage />);
    const githubLinks = screen.getAllByRole("link", { name: /GitHub/ });
    for (const link of githubLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("renders the primary call-to-action buttons", () => {
    render(<LandingPage />);
    expect(screen.getByRole("button", { name: "Get started free" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Browse components" })).toBeInTheDocument();
  });

  it("renders every feature card as a heading + description", () => {
    render(<LandingPage />);
    expect(screen.getByRole("heading", { name: "Accessible by default" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Themeable design tokens" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Light and dark, out of the box" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Radix under the hood" })).toBeInTheDocument();
  });

  it("expands an FAQ answer on click and keeps the others collapsed", async () => {
    const user = userEvent.setup();
    render(<LandingPage />);

    const secondQuestion = screen.getByRole("button", { name: "Does it support dark mode?" });
    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");

    await user.click(secondQuestion);

    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/Set data-theme="dark" on <html> or any ancestor element/),
    ).toBeVisible();
  });

  it("submits the newsletter form with the entered email", async () => {
    const onNewsletterSubmit = vi.fn();
    const user = userEvent.setup();
    render(<LandingPage onNewsletterSubmit={onNewsletterSubmit} />);

    await user.type(screen.getByLabelText("Email address"), "reader@example.com");
    await user.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(onNewsletterSubmit).toHaveBeenCalledWith("reader@example.com");
    expect(screen.getByRole("status")).toHaveTextContent(/check your inbox/i);
  });

  it("does not submit the newsletter form when the email is empty", async () => {
    const onNewsletterSubmit = vi.fn();
    const user = userEvent.setup();
    render(<LandingPage onNewsletterSubmit={onNewsletterSubmit} />);

    await user.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(onNewsletterSubmit).not.toHaveBeenCalled();
  });
});
