import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";

// Get the current file's URL and convert it to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current file
const __dirname = resolve(__filename, "..");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows importing with "@components/..." instead of relative paths like "../../components/..."
      "@": resolve(__dirname, "./src"),
    },
  },
});
