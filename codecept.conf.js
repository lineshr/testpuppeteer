exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
        Puppeteer : {
       url: "http://localhost",
       restart: false,
       waitForNavigation: "networkidle0",
       waitForAction: 500,    
          browser: "chrome",
              restart: false,
              show: false,
              host:"localhost",
                  url: "http://dummy.no",
          
                      desiredCapabilities: {
                chromeOptions: {
                    args: [ '--proxy-server=http://localhost:8090', '--disable-features=IsolateOrigins,site-per-process', '--disable-site-per-process', '--disable-web-security', '--no-sandbox','--allow-running-insecure-content','--ignore-certificate-errors']
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
