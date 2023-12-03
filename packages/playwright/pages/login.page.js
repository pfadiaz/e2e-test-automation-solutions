const testdata = require('../data/test-data.json')

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page
    this.inputUsername = page.getByRole('textbox', { name: 'Username' })
    this.inputPassword = page.getByRole('textbox', { name: 'Password' })
    this.buttonLogin = page.getByRole('button', { name: 'Login' })
  }

  async goto() {
    await this.page.goto('/')
  }

  async login() {
    await this.inputUsername.fill(testdata.user)
    await this.inputPassword.fill(process.env.STANDARD_USER_PASSWORD)
    await this.buttonLogin.click()
  }
}
