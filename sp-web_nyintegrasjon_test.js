
Feature('sp-web-login');

Scenario('sp-web ny integrasjoner',  (I)   => {
	   I.amOnPage('https://sp-web-test-test1.azurewebsites.net/');
		 I.see('Samarbeidsportalen');
		 I.click('Logg inn');

		 I.click('//a[@href="/auth/logout"]');
});
