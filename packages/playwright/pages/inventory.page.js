const { expect } = require('@playwright/test')
const testdata = require('../data/test-data.json')

exports.InventoryPage = class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page
    this.pageUrl = `${testdata.url}/inventory.html'`
    this.itemsFromCart = page.locator('.shopping_cart_badge')
    this.allAddToCartButtons = page.getByRole('button').all()
    this.cartIcon = page.locator('.shopping_cart_container')
  }

  async addItemsToCart() {
    for (const button of await this.allAddToCartButtons) {
      await button.isVisible()
      await button.click()
    }
    const total = await this.itemsFromCart.textContent()
    expect(total).toBe('5')
  }

  async gotoCart() {
    await this.cartIcon.click()
    expect(await this.page.url()).toBe(`${testdata.url}/cart.html`)
  }
}
