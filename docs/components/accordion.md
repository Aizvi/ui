# Accordion

A list of items that expand and collapse, such as a FAQ page, or a set of collapsible sections in a settings page. Accordion is built on the Radix Accordion primitive.

## Import

```tsx
import { Accordion } from "@aizvi/ui";
```

## Basic example

```tsx
<Accordion type="single" collapsible>
  <Accordion.Item value="shipping">
    <Accordion.Trigger>How long does shipping take?</Accordion.Trigger>
    <Accordion.Content>
      Most orders arrive within three to five business days.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="returns">
    <Accordion.Trigger>What is your return policy?</Accordion.Trigger>
    <Accordion.Content>
      You can return any item within thirty days for a full refund.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-accordion--single-collapsible&viewMode=story&globals=theme:light" height="260" loading="lazy" title="Accordion basic example"></iframe>
</div>

## The parts

* `Accordion`, the root part. Its `type` prop decides whether one or many items can be open at once.
* `Accordion.Item`, one row in the accordion. Its `value` prop must be unique within the accordion.
* `Accordion.Trigger`, the clickable heading row that opens and closes its item.
* `Accordion.Content`, the panel shown when its item is open.

## Single versus multiple

Set `type="single"` so only one item can be open at a time, opening a new one closes the last. Add `collapsible` so the open item can also be closed, leaving all of them shut.

```tsx
<Accordion type="single" collapsible defaultValue="shipping">
  <Accordion.Item value="shipping">
    <Accordion.Trigger>Shipping</Accordion.Trigger>
    <Accordion.Content>Ships within five business days.</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-accordion--single-collapsible&viewMode=story&globals=theme:light" height="260" loading="lazy" title="Accordion single collapsible"></iframe>
</div>

Set `type="multiple"` to let several items stay open together.

```tsx
<Accordion type="multiple" defaultValue={["shipping", "returns"]}>
  <Accordion.Item value="shipping">
    <Accordion.Trigger>Shipping</Accordion.Trigger>
    <Accordion.Content>Ships within five business days.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="returns">
    <Accordion.Trigger>Returns</Accordion.Trigger>
    <Accordion.Content>Thirty day return window.</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

<div class="preview">
  <div class="preview-label">Live preview</div>
  <iframe src="../storybook/iframe.html?id=components-accordion--multiple&viewMode=story&globals=theme:light" height="260" loading="lazy" title="Accordion multiple"></iframe>
</div>

## Controlled

```tsx
function ExampleAccordion() {
  const [value, setValue] = useState("shipping");

  return (
    <Accordion type="single" collapsible value={value} onValueChange={setValue}>
      <Accordion.Item value="shipping">
        <Accordion.Trigger>Shipping</Accordion.Trigger>
        <Accordion.Content>Ships within five business days.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Disabled item

```tsx
<Accordion.Item value="team" disabled>
  <Accordion.Trigger>Team plan details, coming soon</Accordion.Trigger>
  <Accordion.Content>Not available yet.</Accordion.Content>
</Accordion.Item>
```

## Props

* `Accordion` accepts `type`, one of `single` or `multiple`, plus `value`, `defaultValue`, `onValueChange`, and `collapsible`, matching the Radix Accordion root. `collapsible` only applies when `type` is `single`.
* `Accordion.Item` accepts `value` and `disabled`.
* `Accordion.Trigger` accepts every normal button attribute.
* `Accordion.Content` accepts every normal `<div>` attribute. It animates open and shut, and its inner content is wrapped in an extra `div` so the animation stays smooth.

## Accessibility

* Each trigger is a real button, so it can be reached with the Tab key and opened with Enter or Space.
* The up and down arrow keys move between triggers, and Home and End jump to the first and last one.
* Each panel is linked to its trigger with `aria-controls` and `aria-expanded`, so screen readers always know which rows are open.
