import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['portfolio-website-3j6p.onrender.com'],
    host: true, // allows LAN access
    port: 5173,
    base: './',
  },
});
