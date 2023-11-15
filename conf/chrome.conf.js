import { config as mainConfig } from './main.conf.js';

export const config = {
  ...mainConfig,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
};
