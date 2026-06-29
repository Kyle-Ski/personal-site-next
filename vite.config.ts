import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import type { Plugin } from "vite";

function addUseClient(): Plugin {
  return {
    name: "add-use-client",
    transform(code, id) {
      if (
        /\/@react-(aria|stately|types|spectrum)\//.test(id) &&
        !code.startsWith('"use client"')
      ) {
        return { code: `"use client";\n${code}`, map: null };
      }
    },
  };
}

export default defineConfig({
  plugins: [
    addUseClient(),
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
  environments: {
    ssr: {
      resolve: {
        external: ['sanity', '@sanity/vision', '@sanity/code-input', '@sanity/ui'],
      },
    },
  },
});
