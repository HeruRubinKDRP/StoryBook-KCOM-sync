/** @type { import('@storybook/react').Preview } */
import React from "react";

import GlobalStyleKCOM from "../src/components/_commonStyles/GlobalStyles";

import NextImage from '../src/components/mocks/NextJS/NextImage';

// Mock Next.js' Image component
if (typeof jest !== 'undefined') {
    jest.mock('next/image', () => NextImage);
}


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
