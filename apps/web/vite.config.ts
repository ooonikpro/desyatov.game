import autoprefixer from "autoprefixer";
import * as path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

const APP_BASE_URL = process.env.APP_BASE_URL ?? "";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const generateScopedName =
    mode === "production" ? "[hash:base64:6]" : "[local]__[hash:base64:3]";

  return {
    base: APP_BASE_URL,
    build: {
      outDir: path.resolve(__dirname, "../../dist"),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "./src/app"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@shared": path.resolve(__dirname, "./src/shared"),
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@import "@shared/styles/_prepend.scss";`,
        },
      },
      modules: {
        localsConvention: "camelCase",
        generateScopedName,
      },
    },
  };
});
