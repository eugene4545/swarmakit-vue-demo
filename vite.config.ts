import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@swarmakit/vue": "/node_modules/@swarmakit/vue",
    },
  },
});
