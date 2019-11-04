
Feature('sp-web-login');

Scenario('test something',  (I)   => {
	I.amOnPage('https://sp-web-ver2.azurewebsites.net/');
		 I.see('Samarbeidsportalen');
		 I.click('Logg inn');
		 I.fillField('username','utvtest@difi.no');
		 I.fillField('password','Testadmin123');
		 I.click('login');
		 I.see('INTEGRASJONER');
		 I.see('MINE API');
		 I.see('TEST1');
});
