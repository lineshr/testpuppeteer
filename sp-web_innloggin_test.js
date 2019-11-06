
Feature('sp-web-login');

Scenario('sp-web loginn',  (I)   => {
	   I.amOnPage('https://sp-web-test-test1.azurewebsites.net/');
		 I.see('Samarbeidsportalen');
		 I.click('Logg inn');
		 I.fillField('username',process.env.SP_WEB_USERNAME);
		 I.fillField('password',process.env.SP_WEB_PASSWORD);
		 I.click('login');
		 I.see('INTEGRASJONER');
		 I.dontSee("PROD");
		 I.see('MINE API');
		 I.see('TEST1');
		 I.click('//a[@href="/auth/logout"]');
});
