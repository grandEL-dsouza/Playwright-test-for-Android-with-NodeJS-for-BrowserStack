# Playwright-test-for-Android-with-NodeJS-for-BrowserStack
Playwright test for Android with NodeJS for BrowserStack

This repo contains samples for running Playwright tests on BrowserStack for Android devices.

Setup
Clone the repo git clone -b sdk https://github.com/grandEL-dsouza/Playwright-test-for-Android-with-NodeJS-for-BrowserStack.git and run cd Playwright-test-for-Android-with-NodeJS-for-BrowserStack.
Set BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY as environment variables with your BrowserStack Username and Access Key or update the same in browserstack.yml file.
Run npm i to install the dependencies.
Running your tests
To run the sample tests in parallel across the platforms specified in the browserstack.yml, run npm run sample-test.
To run the sample local tests in parallel across the platforms specified in the browserstack.yml, run npm run sample-local-test.
