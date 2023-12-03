import { config as mainConfig } from './main.conf.js'

export const config = {
  ...mainConfig,
  services: ['docker'],
  dockerOptions: {
    image: 'seleniarm/standalone-chromium',
    healthCheck: 'http://localhost:4444',
    options: {
      p: ['4444:4444'],
      shmSize: '2g',
    },
  },
}
