# Dialog

A modal window that sits on top of the page, for things like a confirm step, a short form, or an important message. Dialog is built on the Radix Dialog primitive, so focus is trapped inside it, the page behind it is hidden from screen readers, and it closes cleanly with the Escape key or a click on the overlay.

## Import

```tsx
import { Dialog } from "@aizvi/ui";
```

## Basic example

```tsx
<Dialog>
  <Dialog.Trigger asChild>
    <Button>Open dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Delete this item</Dialog.Title>
    <Dialog.Description>
      This cannot be undone. The item will be removed right away.
    </Dialog.Description>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="ghost">Cancel</Button>
      </Dialog.Close>
      <Button variant="danger">Delete</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
```

<div class="preview">
  <div class="preview-label">Live preview, click the button to open it</div>
  <iframe src="../storybook/iframe.html?id=components-dialog--default&viewMode=story&globals=theme:light" height="420" loading="lazy" title="Dialog basic example"></iframe>
</div>

## The parts

Dialog is made of a few small parts that work together. You only need the ones your dialog actually uses.

* `Dialog`, the root part. It holds the open state, either on its own or through the `open` and `onOpenChange` props, for when you want to control it yourself.
* `Dialog.Trigger`, the control that opens the dialog. Pass `asChild` to use your own [Button](./button) or link instead of a plain HTML button.
* `Dialog.Content`, the window itself. It is placed in a portal, so it always renders on top of the rest of the page, with a dimmed overlay behind it.
* `Dialog.Title`, the dialog heading. Screen readers read this out loud as soon as the dialog opens, so always include one.
* `Dialog.Description`, a short line of supporting text below the title. This is optional, but it helps screen reader users understand why the dialog appeared.
* `Dialog.Footer`, a row for action buttons, such as Cancel and Confirm.
* `Dialog.Close`, a control that closes the dialog. Pass `asChild` to use your own [Button](./button).

## Controlled open state

Sometimes you need to open a dialog from code, such as after a network request finishes. Pass `open` and `onOpenChange` to take over control yourself.

```tsx
function ExampleDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Open dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Saved</Dialog.Title>
        <Dialog.Description>Your changes have been saved.</Dialog.Description>
        <Dialog.Footer>
          <Button onClick={() => setOpen(false)}>Done</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
```

## Hiding the close button

`Dialog.Content` renders a small close icon in the top right corner by default. Set `showCloseButton` to `false` when your footer already has its own way to close the dialog, such as a Cancel button.

```tsx
<Dialog.Content showCloseButton={false}>
  <Dialog.Title>Restart required</Dialog.Title>
  <Dialog.Description>The app needs to restart to finish updating.</Dialog.Description>
  <Dialog.Footer>
    <Button>Restart now</Button>
  </Dialog.Footer>
</Dialog.Content>
```

<div class="preview">
  <div class="preview-label">Live preview, click the button to open it</div>
  <iframe src="../storybook/iframe.html?id=components-dialog--without-close-button&viewMode=story&globals=theme:light" height="420" loading="lazy" title="Dialog without close button"></iframe>
</div>

## Props

* `Dialog` accepts `open`, `defaultOpen`, `onOpenChange`, and `modal`, matching the Radix Dialog root.
* `Dialog.Trigger` and `Dialog.Close` accept `asChild`, plus every normal button attribute.
* `Dialog.Content` accepts every normal Radix Dialog content prop, plus `showCloseButton`, a boolean that shows or hides the built in close icon. The default is `true`.
* `Dialog.Title` and `Dialog.Description` accept every normal Radix Dialog title and description prop.
* `Dialog.Footer` accepts every normal `<div>` attribute.

## Accessibility

* Focus moves into the dialog as soon as it opens, and returns to the trigger once it closes.
* Focus cannot leave the dialog while it is open, so keyboard and screen reader users cannot accidentally reach content behind it.
* Pressing Escape closes the dialog, and clicking the overlay behind it closes the dialog too.
* Always include a `Dialog.Title`. It is read out loud right away, so screen reader users know what the dialog is for.
* If your dialog has no visible description, you can still add `Dialog.Description` and hide it visually, so assistive technology still gets the extra context.
