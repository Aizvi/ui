# Tooltip

A small popup that explains an icon or a control on hover or focus, such as what a toolbar button does. Tooltip is built on the Radix Tooltip primitive.

## Import

```tsx
import { Tooltip } from "@aizvi/ui";
```

## Basic example

```tsx
<Tooltip>
  <Tooltip.Trigger asChild>
    <Button variant="ghost">Save</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Save your changes</Tooltip.Content>
</Tooltip>
```

## The parts

* `Tooltip`, the root part. It already includes a Radix Tooltip Provider internally, so you never need to add one yourself, and every Tooltip on the page shares the same open and close timing.
* `Tooltip.Trigger`, the control the tooltip is attached to. Pass `asChild` to use your own [Button](./button) or icon instead of a plain HTML button.
* `Tooltip.Content`, the popup itself, shown on hover or on keyboard focus. It is placed in a portal, and includes a small arrow pointing at the trigger.

## On an icon only button

Tooltip is most useful on controls that have no visible text, such as an icon only button.

```tsx
<Tooltip>
  <Tooltip.Trigger asChild>
    <Button variant="ghost" aria-label="Delete">
      <TrashIcon />
    </Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Delete</Tooltip.Content>
</Tooltip>
```

## Placement

`Tooltip.Content` accepts `side` and `align`, so you can choose which way the popup opens.

```tsx
<Tooltip>
  <Tooltip.Trigger asChild>
    <Button variant="ghost">Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content side="right" align="start">
    Opens to the right
  </Tooltip.Content>
</Tooltip>
```

## Delay

```tsx
<Tooltip delayDuration={0}>
  <Tooltip.Trigger asChild>
    <Button variant="ghost">No delay</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>Shows right away</Tooltip.Content>
</Tooltip>
```

## Props

* `Tooltip` accepts `open`, `defaultOpen`, `onOpenChange`, and `delayDuration`, matching the Radix Tooltip root. `delayDuration` is the number of milliseconds of hover before the tooltip appears.
* `Tooltip.Trigger` accepts `asChild`, plus every normal button attribute.
* `Tooltip.Content` accepts every normal Radix Tooltip content prop, such as `side`, `align`, and `sideOffset`. `sideOffset` defaults to `6`.

## Accessibility

* The tooltip opens on mouse hover and on keyboard focus alike, so keyboard users see the same information as mouse users.
* Pressing Escape, or moving focus away, closes the tooltip.
* A tooltip is not a good place for content someone truly needs, such as a required instruction. Keep tooltip text short, and put anything essential in visible text instead.
* Tooltip is not meant for touch only devices, since there is no hover state to trigger it. Do not rely on it for the only way to reach important information.
