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
        items: [{ text: "Overview", link: "/components/overview" }],
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
