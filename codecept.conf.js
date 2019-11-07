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
      reportDir: 'output'
  }
},
  bootstrap: null,
  name: 'webdriverpuppeteer'
}
