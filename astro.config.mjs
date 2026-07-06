import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://www.max-arias.com",
  adapter: undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
