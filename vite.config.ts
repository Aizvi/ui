/// <reference types="vitest/config" />
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const root = import.meta.dirname;

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx", "src/test/**"],
      bundleTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(root, "src/index.ts"),
      formats: ["es"],
    },
    rolldownOptions: {
      // Never bundle node_modules: react/react-dom are peer deps and every
      // @radix-ui/* package (plus its own transitive deps) is a regular
      // dependency that npm installs for the consumer. Bare specifiers are
      // packages; relative/absolute paths are our own source files.
      external: (id) => !id.startsWith(".") && !id.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(id),
      output: {
        // Keep each source module as its own output file (instead of one
        // bundled index.js) so per-file "use client" directives survive for
        // consumers doing RSC-aware bundling (e.g. Next.js app router).
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: (assetInfo) =>
          assetInfo.names.some((name) => name.endsWith(".css"))
            ? "styles.css"
            : (assetInfo.names[0] ?? "assets/[name][extname]"),
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    target: "es2022",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: ["**/*.stories.tsx", "src/test/**", "**/*.config.ts", ".storybook/**"],
    },
  },
});
