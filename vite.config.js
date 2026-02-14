import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    proxy: {
      "/graphql": {
        target: "http://localhost:1337",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
