/** @type { import('@storybook/react').Preview } */
import "../src/theme/boostrap-theme.scss";
import "../src/theme/main.scss";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
