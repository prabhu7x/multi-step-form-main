import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/multi-step-form-main/',
  plugins: [react()],
});

process.env.BROWSER = "chromium";