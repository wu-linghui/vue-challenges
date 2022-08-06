import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Inspector from 'vite-plugin-vue-inspector';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      }
    }),
    vueJsx(),
    Inspector({
      enabled: false,
      toggleButtonVisibility: 'never'
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./src/views/demo", import.meta.url)),
    },
  },
  test: {
    includeSource: ["**/*.{test,spec}.{ts}"],
  },
});
