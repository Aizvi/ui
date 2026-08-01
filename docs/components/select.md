# Select

A dropdown field for picking one value out of a list, such as a country, a plan, or a sort order. Select is built on the Radix Select primitive, so it works fully with the keyboard, and it behaves like a native form control for screen readers.

## Import

```tsx
import { Select } from "@aizvi/ui";
```

## Basic example

```tsx
<Select>
  <Select.Trigger placeholder="Choose a plan" />
  <Select.Content>
    <Select.Item value="free">Free</Select.Item>
    <Select.Item value="pro">Pro</Select.Item>
    <Select.Item value="team">Team</Select.Item>
  </Select.Content>
</Select>
```

<div class="preview">
  <div class="preview-label">Live preview, click the field to open it</div>
  <iframe src="../storybook/iframe.html?id=components-select--default&viewMode=story&globals=theme:light" height="320" loading="lazy" title="Select basic example"></iframe>
</div>

## The parts

* `Select`, the root part. It holds the selected value, either on its own or through the `value` and `onValueChange` props.
* `Select.Trigger`, the closed field that the user clicks to open the list. Its `placeholder` prop is the text shown when nothing is chosen yet.
* `Select.Content`, the popup list of choices. It is placed in a portal, so it always floats above the rest of the page.
* `Select.Item`, one choice in the list. Its `value` prop is the value your app receives when it is picked.
* `Select.Group`, groups related items together.
* `Select.Label`, a small heading above a group.
* `Select.Separator`, a thin line between groups of items.

## Controlled value

```tsx
function ExampleSelect() {
  const [plan, setPlan] = useState("free");

  return (
    <Select value={plan} onValueChange={setPlan}>
      <Select.Trigger placeholder="Choose a plan" />
      <Select.Content>
        <Select.Item value="free">Free</Select.Item>
        <Select.Item value="pro">Pro</Select.Item>
        <Select.Item value="team">Team</Select.Item>
      </Select.Content>
    </Select>
  );
}
```

## Groups and labels

Use `Select.Group`, `Select.Label`, and `Select.Separator` to organize a longer list into sections.

```tsx
<Select>
  <Select.Trigger placeholder="Choose a fruit" />
  <Select.Content>
    <Select.Group>
      <Select.Label>Citrus</Select.Label>
      <Select.Item value="orange">Orange</Select.Item>
      <Select.Item value="lemon">Lemon</Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.Label>Berries</Select.Label>
      <Select.Item value="strawberry">Strawberry</Select.Item>
      <Select.Item value="blueberry">Blueberry</Select.Item>
    </Select.Group>
  </Select.Content>
</Select>
```

<div class="preview">
  <div class="preview-label">Live preview, click the field to open it</div>
  <iframe src="../storybook/iframe.html?id=components-select--with-groups&viewMode=story&globals=theme:light" height="360" loading="lazy" title="Select with groups and labels"></iframe>
</div>

## Disabled

```tsx
<Select disabled>
  <Select.Trigger placeholder="Not available right now" />
  <Select.Content>
    <Select.Item value="a">Option A</Select.Item>
  </Select.Content>
</Select>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-select--disabled&viewMode=story&globals=theme:light" height="120" loading="lazy" title="Select disabled"></iframe>
</div>

A single item can also be disabled on its own, while the rest of the list stays open for picking.

```tsx
<Select.Item value="team" disabled>
  Team, coming soon
</Select.Item>
```

<div class="preview">
  <div class="preview-label">Live preview, click the field to open it</div>
  <iframe src="../storybook/iframe.html?id=components-select--with-disabled-item&viewMode=story&globals=theme:light" height="320" loading="lazy" title="Select with a disabled item"></iframe>
</div>

## Props

* `Select` accepts `value`, `defaultValue`, `onValueChange`, `open`, `defaultOpen`, `onOpenChange`, `disabled`, `required`, and `name`, matching the Radix Select root, so it works well inside plain HTML forms too.
* `Select.Trigger` accepts every normal Radix Select trigger prop, plus `placeholder`, the text shown when no value is picked.
* `Select.Content` accepts every normal Radix Select content prop. `position` defaults to `popper` and `sideOffset` defaults to `4`.
* `Select.Item` accepts `value`, `disabled`, and `textValue`, matching the Radix Select item.
* `Select.Group`, `Select.Label`, and `Select.Separator` accept every normal matching Radix Select prop.

## Accessibility

* Select behaves like a native `<select>` for assistive technology, including arrow key navigation, typeahead by first letter, and announcing the picked value.
* The list opens and closes with the keyboard alone, using Enter, Space, and Escape.
* Always give `Select.Trigger` a clear `placeholder`, or wrap it with [FormField](./formField) so it gets a real label.
