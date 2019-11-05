
Feature('sp-web-login');

Scenario('sp-web ny integrasjoner',  (I)   => {
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
		 I.click('//a[@href="/integrations"]');
		 I.see('TEST1');
		 I.see('Integrasjons-ID');
		 I.see('Integrasjonsnavn');
		 I.see('Tjeneste');
		 I.see('Beskrivelse');
		 I.see('Opprettet');
		 I.see('Endret');
		 I.see('+ Ny integrasjon');
		 I.click('+ Ny integrasjon');
		 I.click('//a[@href="/auth/logout"]');
});
