
Feature('sp-web-login');

Scenario('sp-web loginn',  (I)   => {
	I.amOnPage('https://sp-web-test-test1.azurewebsites.net/');
	I.see('Samarbeidsportalen');
	I.click('login-button');
	I.fillField('username','utvtest@difi.no');
	I.fillField('password','Testadmin123');
	I.click('login');
	I.see('INTEGRASJONER');
	I.see('MINE API');
	I.see('TEST1');
});
