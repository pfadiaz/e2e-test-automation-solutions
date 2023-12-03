import addBrowserCustomCommands from '../test/utils/custom-commands.js'
import { browser } from '@wdio/globals'
import allure from 'allure-commandline'

export const config = {
  runner: 'local',
  specs: ['../test/specs/**/*.js'],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec', 'dot', ['allure', { outputDir: 'allure-results' }]],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  before: async function (capabilities, specs) {
    await addBrowserCustomCommands()
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries },
  ) {
    if (!passed) {
      await browser.takeScreenshot()
    }
  },
  onComplete: function () {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        console.log('Allure report successfully generated')
        resolve()
      })
    })
  },
}
