# UI Testing With Webdriverio

This project uses playwright to test the purchase flow for the website: `https://www.saucedemo.com/`

 <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Playwright_Logo.svg" width="400px" height="200px" />

The project has been written in JS, and has the following features:

- Eslint and prettier configuration
- Page Object Model Pattern.

# How to run the suite?

Once you have pulled the code, Make sure you are node > 16

Just run:

```
npm install
```

That will install all the dependencies.

Finally as part of the set up, you need to add a `.env` file at root level of your project and add this properties:

```
STANDARD_USER_PASSWORD=
```

You can find the password for standard_user at https://www.saucedemo.com/ just paste it there, in
`STANDARD_USER_PASSWORD`.

Once you are ready, just head back to your terminal and run:

```
npm run test
```

It will spin up a browser and execute the test in headed mode.

For more options you can do this:

Headless run:

```
npx playwright test
```

Playwright UI interface mode:

```
npx playwright test --ui
```

# Report:

After every run, playwright will open an HTML report for you.
