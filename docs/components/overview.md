# Components

Aizvi UI ships around twenty components. Each one has its own live, interactive page in [Storybook](/storybook/), where you can try every variant, every size, and both themes.

This page is a short map of what is inside the package, so you can find the right part fast.

## Plain HTML parts

These parts are built from plain, semantic HTML. They do not use Radix Primitives.

* **Button**, for actions like submit, save, or delete.
* **Input**, a single line text field.
* **Textarea**, a multi line text field.
* **FormField**, wraps a label, a hint, and an error around any field.
* **Link**, a styled anchor, with safe handling for outside links.
* **Heading**, for page and section titles.
* **Text**, for paragraphs and small pieces of copy.
* **Card**, a bordered or raised box for grouping content.
* **Container**, keeps page content at a good, readable width.
* **Stack**, a small helper for row and column layout.

## Parts built on Radix Primitives

These parts handle harder interaction, like focus trapping, popup positioning, and full keyboard menus. Radix Primitives power them under the hood, but you only ever talk to our own API.

* **Dialog**, a modal window, with a title, a body, and a footer.
* **Select**, a dropdown for picking one value from a list.
* **Checkbox**, a single choice box, with support for a mixed state.
* **Switch**, an on and off toggle.
* **Tabs**, for splitting content into named panels.
* **Tooltip**, a small popup that explains an icon or a control.
* **Popover**, a small floating panel of extra content.
* **DropdownMenu**, a menu of actions, with support for checkable and radio items.
* **Accordion**, for a list of items that expand and collapse, such as a FAQ.
* **Slider**, for picking one value, or a range, along a track.

## Where to go next

* Read the [Theming guide](/guide/theming) to learn about tokens, dark mode, and rounding.
* Read the [Accessibility guide](/guide/accessibility) to see what every part promises.
* Open [Storybook](/storybook/) to see every part in action, and to try both themes live.
