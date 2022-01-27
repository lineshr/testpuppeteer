exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
Playwright: {
      url: '',
    //  waitForNavigation: ["networkidle0", "domcontentloaded"],
      // waitForNavigation:  "networkidle0",
      waitForAction: 100,
      waitForTimeout: 20000,
      getPageTimeout: 20000,
      windowSize: "1200x900",
      browser: 'firefox',
      show: false,
      chrome: {
        args: ['--disable-features=IsolateOrigins,site-per-process', '--disable-site-per-process', '--disable-web-security', '--no-sandbox','--allow-running-insecure-content'],
        ignoreHTTPSErrors: true
      },
      pressKeyDelay: 5,
      video: true

    },
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
        reportDir: 'output'
    }
  },
  bootstrap: null,
  name: 'webdriverpuppeteer'

}
