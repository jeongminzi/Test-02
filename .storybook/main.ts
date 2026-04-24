import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(ts|tsx|mdx)",
    "../src/foundations/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: { autodocs: "tag" },
  typescript: { reactDocgen: "react-docgen-typescript" },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
    });
  },
};

export default config;
