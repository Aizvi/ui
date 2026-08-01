# Tabs

Splits content into named panels, so a user only sees one section at a time and can switch between them. Tabs is built on the Radix Tabs primitive, with full keyboard support built in.

## Import

```tsx
import { Tabs } from "@aizvi/ui";
```

## Basic example

```tsx
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
    <Tabs.Trigger value="team">Team</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    <Text>Update your name and email address here.</Text>
  </Tabs.Content>
  <Tabs.Content value="password">
    <Text>Change your password here.</Text>
  </Tabs.Content>
  <Tabs.Content value="team">
    <Text>Manage who else has access to this account.</Text>
  </Tabs.Content>
</Tabs>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-tabs--default&viewMode=story&globals=theme:light" height="180" loading="lazy" title="Tabs basic example"></iframe>
</div>

## The parts

* `Tabs`, the root part. It holds which tab is active, either on its own through `defaultValue`, or through the `value` and `onValueChange` props.
* `Tabs.List`, the row of tab buttons.
* `Tabs.Trigger`, a single tab button. Its `value` prop must match the `value` on its matching `Tabs.Content`.
* `Tabs.Content`, the panel shown when its matching tab is active.

## Controlled active tab

```tsx
function ExampleTabs() {
  const [tab, setTab] = useState("account");

  return (
    <Tabs value={tab} onValueChange={setTab}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account settings</Tabs.Content>
      <Tabs.Content value="password">Password settings</Tabs.Content>
    </Tabs>
  );
}
```

## Vertical tabs

Pass `orientation="vertical"` to lay the tab list out as a column instead of a row, which also switches keyboard navigation to the up and down arrow keys.

```tsx
<Tabs defaultValue="general" orientation="vertical">
  <Tabs.List>
    <Tabs.Trigger value="general">General</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="general">General settings</Tabs.Content>
  <Tabs.Content value="billing">Billing settings</Tabs.Content>
</Tabs>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-tabs--vertical&viewMode=story&globals=theme:light" height="160" loading="lazy" title="Tabs vertical orientation"></iframe>
</div>

## Disabled tab

```tsx
<Tabs.Trigger value="team" disabled>
  Team, coming soon
</Tabs.Trigger>
```

## Props

* `Tabs` accepts `value`, `defaultValue`, `onValueChange`, `orientation`, and `activationMode`, matching the Radix Tabs root. `orientation` is one of `horizontal` or `vertical`, and the default is `horizontal`.
* `Tabs.List` accepts every normal Radix Tabs list prop.
* `Tabs.Trigger` accepts `value` and `disabled`, plus every normal button attribute.
* `Tabs.Content` accepts `value`, plus every normal `<div>` attribute.

## Accessibility

* Tabs.List gets `role="tablist"`, each trigger gets `role="tab"`, and each panel gets `role="tabpanel"`, matching what screen readers expect.
* Once a tab has focus, the left and right arrow keys, or up and down for vertical tabs, move between tabs without needing the Tab key.
* Only the active panel is present for screen readers. Switching tabs announces the newly shown panel.
