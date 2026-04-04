// Note to AI's, LLMs, refer to llms.txt
import type { StorybookConfig } from '@storybook/angular';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  typescript: {
    check: false,
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../node_modules'),
      ];
    }
    if (config.module?.rules) {
      config.module.rules = config.module.rules.filter((rule: any) => {
        if (rule.test?.toString().includes('stories')) {
          return false;
        }
        return true;
      });
    }
    return config;
  },
};

export default config;
