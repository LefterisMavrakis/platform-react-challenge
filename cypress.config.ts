import { devServer } from "@cypress/vite-dev-server";
import { defineConfig } from "cypress";
import * as path from "path";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("dev-server:start", (options) => {
        return devServer({
          ...options,
          viteConfig: {
            configFile: path.resolve(__dirname, "vite.config.ts"),
          },
        });
      });
    },
    baseUrl: "http://localhost:5173/",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
