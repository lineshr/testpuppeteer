
Feature('sp-web-login');

Scenario('sp-web loginn',  (I)   => {
	   I.amOnPage('https://sp-web-test-test1.azurewebsites.net/');
		 I.see('Samarbeidsportalen');
		 I.click('Logg inn');
		 I.fillField('username','utvtest@difi.no');
		 I.fillField('password','Testadmin123');
		 I.click('login');
		 I.see('INTEGRASJONER');
		 I.dontSee("PROD");
		 I.see('MINE API');
		 I.see('TEST1');
		 I.click('//a[@href="/auth/logout"]');
});
