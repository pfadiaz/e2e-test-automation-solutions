const faker = require('@faker-js/faker')
const { expect } = require('@playwright/test')
const testdata = require('../data/test-data.json')

exports.CartPage = class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page
    this.buttonCheckout = page.getByRole('button', { name: 'Checkout' })
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' })
    this.zipInput = page.getByRole('textbox', { name: 'Zip/Postal Code' })
    this.buttonContinue = page.getByRole('button', { name: 'Continue' })
    this.buttonFinish = page.getByRole('button', { name: 'Finish' })
    this.thankYouHeader = page.locator('.complete-header')
  }

  async completeCheckout() {
    await this.buttonCheckout.click()
    await this.firstNameInput.fill(faker.allFakers.en_US.person.firstName())
    await this.lastNameInput.fill(faker.allFakers.en_US.person.lastName())
    await this.zipInput.fill(faker.allFakers.en_US.location.zipCode())
    await this.buttonContinue.click()
    await this.buttonFinish.click()
    expect(await this.page.url()).toBe(`${testdata.url}/checkout-complete.html`)
    expect(await this.thankYouHeader.textContent()).toBe(
      `${testdata['complete-checkout']}`,
    )
  }
}
