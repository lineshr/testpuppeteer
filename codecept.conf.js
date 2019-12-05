exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url :'https://sp-web-test-test1.azurewebsites.net/',
      chrome:{
        args: ['--no-sandbox']
      }
    }
  },
  plugins: {
    allure: {
      enabled: 'true'
  }
},
  include: {
    I: './steps_file.js'
  },
mocha: {
        reporterOptions: {
            'codeceptjs-cli-reporter': {
                stdout: './output/result.xml',
                options: {
                    verbose: true,
                    steps: true,
                },
            },
            mochawesome: {
                stdout: './output/console/console.log',
                options: {
                    reportDir: './output/mochawesome/',
                    reportFilename: 'report',
                    quiet: true,
                    json: false,
                    html: true,
                    overwrite: true,
                },
            },
        },
    },
  bootstrap: null,
  name: 'webdriverpuppeteer'
}
