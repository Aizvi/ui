# Popover

A small floating panel of extra content, opened by a click, such as a filter panel, a color picker, or a short settings form. Popover is built on the Radix Popover primitive.

## Import

```tsx
import { Popover } from "@aizvi/ui";
```

## Basic example

```tsx
<Popover>
  <Popover.Trigger asChild>
    <Button variant="outline">Filters</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Stack gap="2">
      <Checkbox label="Show archived" />
      <Checkbox label="Show drafts" />
    </Stack>
  </Popover.Content>
</Popover>
```

<div class="preview">
  <div class="preview-label">Live preview, click the button to open it</div>
  <iframe src="../storybook/iframe.html?id=components-popover--default&viewMode=story&globals=theme:light" height="220" loading="lazy" title="Popover basic example"></iframe>
</div>

## The parts

* `Popover`, the root part. It holds the open state, either on its own or through the `open` and `onOpenChange` props.
* `Popover.Trigger`, the control that opens the popover. Pass `asChild` to use your own [Button](./button).
* `Popover.Content`, the floating panel itself. It is placed in a portal, so it floats above the rest of the page, and closes automatically when the user clicks outside it.
* `Popover.Close`, a control placed inside the content that closes the popover when clicked.
* `Popover.Anchor`, an optional part that lets the popover point at a different element than its trigger.

## With a close button

```tsx
<Popover>
  <Popover.Trigger asChild>
    <Button variant="outline">Share</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Stack gap="3">
      <Text>Share a link to this page.</Text>
      <Popover.Close asChild>
        <Button size="sm">Done</Button>
      </Popover.Close>
    </Stack>
  </Popover.Content>
</Popover>
```

<div class="preview">
  <div class="preview-label">Live preview, click the button to open it</div>
  <iframe src="../storybook/iframe.html?id=components-popover--with-close&viewMode=story&globals=theme:light" height="220" loading="lazy" title="Popover with a close button"></iframe>
</div>

## Controlled open state

```tsx
function ExamplePopover() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button variant="outline">Options</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Button onClick={() => setOpen(false)}>Close from inside</Button>
      </Popover.Content>
    </Popover>
  );
}
```

## Placement

```tsx
<Popover.Content side="top" align="end">
  Opens above and lines up with the right edge of the trigger.
</Popover.Content>
```

## Props

* `Popover` accepts `open`, `defaultOpen`, `onOpenChange`, and `modal`, matching the Radix Popover root.
* `Popover.Trigger` and `Popover.Close` accept `asChild`, plus every normal button attribute.
* `Popover.Content` accepts every normal Radix Popover content prop, such as `side`, `align`, and `sideOffset`. `sideOffset` defaults to `6`.
* `Popover.Anchor` accepts every normal Radix Popover anchor prop.

## Accessibility

* Focus moves into the popover once it opens, and returns to the trigger once it closes.
* Pressing Escape closes the popover, and clicking anywhere outside it closes it too.
* Unlike [Dialog](./dialog), a popover does not block interaction with the rest of the page unless you set `modal`, so use Popover for optional, lightweight content, and Dialog when the user must respond before doing anything else.
