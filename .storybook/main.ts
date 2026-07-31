import { resolve } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const root = import.meta.dirname;

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: [],
  viteFinal: async (viteConfig) => {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      "@styles": resolve(root, "../src/styles"),
    };
    return viteConfig;
  },
};

export default config;
