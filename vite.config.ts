import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [react({ include: ["**/*.tsx", "**/*.ts", "**/*.scss"] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@types": path.resolve(__dirname, "src/types"),
    },
  },
  server: {
    allowedHosts: true,
    host: true,
    hmr: {
      host: "100.64.217.16",
      port: 24678,
      protocol: "ws",
    },
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
