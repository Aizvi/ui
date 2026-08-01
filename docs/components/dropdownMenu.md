# DropdownMenu

A menu of actions that opens from a button, such as a row of options on a table row, or a user account menu. DropdownMenu is built on the Radix Dropdown Menu primitive, with support for plain items, checkable items, and radio style items.

## Import

```tsx
import { DropdownMenu } from "@aizvi/ui";
```

## Basic example

```tsx
<DropdownMenu>
  <DropdownMenu.Trigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onSelect={() => console.log("edit")}>Edit</DropdownMenu.Item>
    <DropdownMenu.Item onSelect={() => console.log("duplicate")}>Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item onSelect={() => console.log("delete")}>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
```

## The parts

* `DropdownMenu`, the root part. It holds the open state, either on its own or through the `open` and `onOpenChange` props.
* `DropdownMenu.Trigger`, the control that opens the menu. Pass `asChild` to use your own [Button](./button).
* `DropdownMenu.Content`, the menu popup itself, placed in a portal.
* `DropdownMenu.Item`, one plain, clickable row in the menu.
* `DropdownMenu.CheckboxItem`, a row with its own on and off state, shown with a check mark.
* `DropdownMenu.RadioGroup` and `DropdownMenu.RadioItem`, a group of rows where only one can be picked at a time, shown with a dot.
* `DropdownMenu.Label`, a small heading inside the menu.
* `DropdownMenu.Separator`, a thin line between groups of items.

## Checkbox items

```tsx
function ExampleMenu() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">View</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.CheckboxItem
          checked={showArchived}
          onCheckedChange={setShowArchived}
        >
          Show archived
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

## Radio items

```tsx
function ExampleSortMenu() {
  const [sort, setSort] = useState("newest");

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Sort by</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Sort by</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenu.RadioItem value="newest">Newest first</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="oldest">Oldest first</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="name">Name</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

## Disabled item

```tsx
<DropdownMenu.Item disabled>Not available right now</DropdownMenu.Item>
```

## Props

* `DropdownMenu` accepts `open`, `defaultOpen`, `onOpenChange`, and `modal`, matching the Radix Dropdown Menu root.
* `DropdownMenu.Trigger` accepts `asChild`, plus every normal button attribute.
* `DropdownMenu.Content` accepts every normal Radix Dropdown Menu content prop, such as `side`, `align`, and `sideOffset`. `sideOffset` defaults to `4`.
* `DropdownMenu.Item` accepts `disabled` and `onSelect`, plus every normal Radix Dropdown Menu item prop.
* `DropdownMenu.CheckboxItem` accepts `checked`, `onCheckedChange`, and `disabled`.
* `DropdownMenu.RadioGroup` accepts `value`, `defaultValue`, and `onValueChange`.
* `DropdownMenu.RadioItem` accepts `value` and `disabled`.
* `DropdownMenu.Label` and `DropdownMenu.Separator` accept every normal matching Radix Dropdown Menu prop.

## Accessibility

* The menu opens and closes fully with the keyboard, including arrow keys to move between items, Enter or Space to pick one, and Escape to close.
* Typing a letter jumps to the next item that starts with it, just like a native menu.
* `DropdownMenu.CheckboxItem` and `DropdownMenu.RadioItem` are announced with their current state, so screen reader users know what is checked or selected.
* Use DropdownMenu for a list of actions or choices tied to one trigger. Use [Select](./select) instead when the goal is picking one value for a form field.
