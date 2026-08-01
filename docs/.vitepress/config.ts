import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/ui/",
  title: "Aizvi UI",
  description:
    "An open source React design system for building modern, consistent, and accessible apps.",
  cleanUrls: true,
  // /storybook/ is a separately built static site, copied alongside this
  // one at deploy time (see .github/workflows/docs.yml). It is not a
  // VitePress page, so the dead link checker can never resolve it.
  ignoreDeadLinks: [/^\/storybook\//],

  head: [["link", { rel: "icon", href: "/ui/favicon.svg" }]],

  themeConfig: {
    logo: "/favicon.svg",

    nav: [
      { text: "Guide", link: "/guide/introduction" },
      { text: "Components", link: "/components/overview" },
      { text: "Storybook", link: "/storybook/" },
      { text: "npm", link: "https://www.npmjs.com/package/@aizvi/ui" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/installation" },
          { text: "Theming", link: "/guide/theming" },
          { text: "Accessibility", link: "/guide/accessibility" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Overview", link: "/components/overview" },
          {
            text: "Plain HTML parts",
            items: [
              { text: "Button", link: "/components/button" },
              { text: "Input", link: "/components/input" },
              { text: "Textarea", link: "/components/textarea" },
              { text: "FormField", link: "/components/formField" },
              { text: "Link", link: "/components/link" },
              { text: "Heading", link: "/components/heading" },
              { text: "Text", link: "/components/text" },
              { text: "Card", link: "/components/card" },
              { text: "Container", link: "/components/container" },
              { text: "Stack", link: "/components/stack" },
            ],
          },
          {
            text: "Radix Primitives",
            items: [
              { text: "Dialog", link: "/components/dialog" },
              { text: "Select", link: "/components/select" },
              { text: "Checkbox", link: "/components/checkbox" },
              { text: "Switch", link: "/components/switch" },
              { text: "Tabs", link: "/components/tabs" },
              { text: "Tooltip", link: "/components/tooltip" },
              { text: "Popover", link: "/components/popover" },
              { text: "DropdownMenu", link: "/components/dropdownMenu" },
              { text: "Accordion", link: "/components/accordion" },
              { text: "Slider", link: "/components/slider" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Aizvi/ui" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 Aizvi",
    },

    search: {
      provider: "local",
    },
  },
});
