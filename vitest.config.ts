import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts",
    include: ["./src/**/*.{test.ts,test.tsx}"],
    exclude: ["node_modules"],
  },
});
