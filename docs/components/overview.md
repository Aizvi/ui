# Components

Aizvi UI ships around twenty components. Each one has its own live, interactive page in [Storybook](https://aizvi.github.io/ui/storybook/), where you can try every variant, every size, and both themes.

This page is a short map of what is inside the package, so you can find the right part fast.

## Plain HTML parts

These parts are built from plain, semantic HTML. They do not use Radix Primitives.

* [Button](./button), for actions like submit, save, or delete.
* [Input](./input), a single line text field.
* [Textarea](./textarea), a multi line text field.
* [FormField](./formField), wraps a label, a hint, and an error around any field.
* [Link](./link), a styled anchor, with safe handling for outside links.
* [Heading](./heading), for page and section titles.
* [Text](./text), for paragraphs and small pieces of copy.
* [Card](./card), a bordered or raised box for grouping content.
* [Container](./container), keeps page content at a good, readable width.
* [Stack](./stack), a small helper for row and column layout.

## Parts built on Radix Primitives

These parts handle harder interaction, like focus trapping, popup positioning, and full keyboard menus. Radix Primitives power them under the hood, but you only ever talk to our own API.

* [Dialog](./dialog), a modal window, with a title, a body, and a footer.
* [Select](./select), a dropdown for picking one value from a list.
* [Checkbox](./checkbox), a single choice box, with support for a mixed state.
* [Switch](./switch), an on and off toggle.
* [Tabs](./tabs), for splitting content into named panels.
* [Tooltip](./tooltip), a small popup that explains an icon or a control.
* [Popover](./popover), a small floating panel of extra content.
* [DropdownMenu](./dropdownMenu), a menu of actions, with support for checkable and radio items.
* [Accordion](./accordion), for a list of items that expand and collapse, such as a FAQ.
* [Slider](./slider), for picking one value, or a range, along a track.

## Where to go next

* Read the [Theming guide](/guide/theming) to learn about tokens, dark mode, and rounding.
* Read the [Accessibility guide](/guide/accessibility) to see what every part promises.
* Open [Storybook](https://aizvi.github.io/ui/storybook/) to see every part in action, and to try both themes live.
