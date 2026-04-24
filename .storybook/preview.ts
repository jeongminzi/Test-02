import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#fff7fa" },
        { name: "surface", value: "#ffffff" },
        { name: "muted", value: "#f9fafb" },
      ],
    },
    options: {
      storySort: {
        order: ["Foundations", "Atoms", "Molecules", "Organisms"],
      },
    },
  },
};

export default preview;
