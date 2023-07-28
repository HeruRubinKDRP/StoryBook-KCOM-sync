/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  staticDirs: ['../public'],
  stories: [
      "../stories/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-styling',
    "@storybook/addon-interactions",
    'storybook-addon-next-router',
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
