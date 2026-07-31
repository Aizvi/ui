import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tabs } from "./Tabs";

function renderTabs() {
  return render(
    <Tabs defaultValue="account">
      <Tabs.List aria-label="Manage your account">
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="team" disabled>
          Team
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account content</Tabs.Content>
      <Tabs.Content value="password">Password content</Tabs.Content>
      <Tabs.Content value="team">Team content</Tabs.Content>
    </Tabs>,
  );
}

describe("Tabs", () => {
  it("shows the default tab's panel and marks its trigger selected", () => {
    renderTabs();
    expect(screen.getByRole("tab", { name: "Account" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "Account" })).toHaveTextContent("Account content");
  });

  it("switches panels on trigger click", async () => {
    const user = userEvent.setup();
    renderTabs();

    await user.click(screen.getByRole("tab", { name: "Password" }));

    expect(screen.getByRole("tab", { name: "Password" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "Password" })).toHaveTextContent(
      "Password content",
    );
  });

  it("navigates between tabs with arrow keys", async () => {
    const user = userEvent.setup();
    renderTabs();

    screen.getByRole("tab", { name: "Account" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Password" })).toHaveFocus();
    expect(screen.getByRole("tab", { name: "Password" })).toHaveAttribute("aria-selected", "true");
  });

  it("skips disabled tabs during keyboard navigation", async () => {
    const user = userEvent.setup();
    renderTabs();

    screen.getByRole("tab", { name: "Password" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Account" })).toHaveFocus();
  });
});
