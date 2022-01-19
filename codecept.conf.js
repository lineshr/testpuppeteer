exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
      WebDriver : {
          smartWait: 5000,
              browser: "chrome",
              restart: false,
              windowSize: "maximize",
              host:"chrome",
              show: true,
                  url: "https://172.18.0.4:4444",
            desiredCapabilities: {
                chromeOptions: {
                    args: [ '--proxy-server=http://localhost:8090 ', '--disable-features=IsolateOrigins,site-per-process', '--disable-site-per-process', '--disable-web-security', '--no-sandbox','--allow-running-insecure-content','--ignore-certificate-errors']
                }
            },
              timeouts: {
            "script": 60000,
                "page load": 10000
          },

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
