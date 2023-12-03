# UI Testing With Webdriverio

This project uses webdriver.io v8, with the latest changes made from commonJS to ESM to test the purchase flow for the website: `https://www.saucedemo.com/`

 <img src="https://marvel-b1-cdn.bc0a.com/f00000000131077/www.perfecto.io/sites/default/files/image/2019-06/webdriver-io-and-perfecto-429.png" width="400px" height="200px" />

The project has been written in JS, and has the following features:

- Eslint following Airbnb configuration
- Page Object Model Pattern.
- It Uses Mocha as test framework
- It also uses de built in assertion library from wdio

# How to run the suite?

Once you have pulled the code, make sure you have installed the specific configuration that webdriverio requires. please see https://webdriver.io/docs/gettingstarted/#system-requirements for more details. (Don't forget about Node, JAVA JRE)

Note: Make sure you are node > 16

You are nearly there, the next step is:

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

It will spin up 3 browsers at the time (if you chose all), otherwise one browser will be spawn.

# Spec Details

The Suite uses a before hook to extract the logic functionality. Inside you can find the use of `this`.

Following the `world` pattern which is basically a state of the test, we can share context of a specific moment across the different `it` so in this case we don't need to reload the same data everytime. Instead just call `this`. The only caveat here, `=>`. That is why you find `function` as it invalides the binding.

As the test is E2E, the resulting spec can be very long. Hard to follow. Due to this, I tried to wrap most of the common actions on each page.

The Test will pick a random entry from the inventory list and stores the important data such as price tag and the item name on `this.itemInCart` so, later can be used for assertions.

You can also find a fixtures folder where we can add that static content that can be loaded and wrap around `this` to use it everywhere.

# Docker

The project uses the wdio docker service. https://webdriver.io/docs/wdio-docker-service/

If you want to run the tests, just start docker on your host and then execute:

```
npm run test:docker
```

# Report:

The suite uses allure report, and it auto-generates the report for you at the end of the execution by using allure-command line from the on complete hook. Once you have executed your test, run:

```
npm run report:open
```

It will open the report in your browser.
