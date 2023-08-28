/** @type { import('@storybook/react').Preview } */
import React from "react";
import GlobalStyleKCOM from "../src/components/_commonStyles/GlobalStyles";





export const decorators = [
  (Story) => (
      <React.Fragment>
        <GlobalStyleKCOM />
        <Story />
      </React.Fragment>
  ),
];

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
