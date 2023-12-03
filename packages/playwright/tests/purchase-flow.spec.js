// @ts-check
const { test } = require('@playwright/test')
const { CartPage } = require('../pages/cart.page')
const { InventoryPage } = require('../pages/inventory.page')
const { LoginPage } = require('../pages/login.page')

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.login()
})

test('TC-001 - validates that an standard user can complete a purchase flow', async ({
  page,
}) => {
  const inventoryPage = new InventoryPage(page)
  await inventoryPage.addItemsToCart()
  await inventoryPage.gotoCart()
  const cartPage = new CartPage(page)
  await cartPage.completeCheckout()
})
