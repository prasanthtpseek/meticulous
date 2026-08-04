import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import meticulous from "@alwaysmeticulous/recorder-plugin/vite";

export default defineConfig({
  plugins: [
    react(),
    // Get your recording token from: https://app.meticulous.ai -> Project Settings
    // By default this only injects the recorder script during `vite dev` / `vite build --mode development`.
    meticulous({
      recordingToken: "ibRfss0qqI8PCXI1ZDNzOs25Qv6bkTmrJmw4O1c2",
	  enabled: "always",
    }),
  ],
});
