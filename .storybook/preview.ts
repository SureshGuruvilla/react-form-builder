import type { Preview } from "@storybook/react";
import "../src/sass/globals.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },
  },
};

export default preview;
