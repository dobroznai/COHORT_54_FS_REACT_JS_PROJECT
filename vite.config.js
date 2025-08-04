import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // сервер буде запускатись на http://localhost:3000
  server: {
    port: 3000,
    strictPort: true, // виведе помилку, якщо порт 3000 зайнятий
  },
});
