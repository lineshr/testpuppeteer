
Feature('sp-web-login');

Scenario('sp-web loginn',  (I)   => {
	   I.amOnPage('https://sp-web-test-test1.azurewebsites.net/');
		 I.see('Samarbeidsportalen');
		 I.click('Logg inn');
		 I.click('//a[@href="/auth/logout"]');
});
