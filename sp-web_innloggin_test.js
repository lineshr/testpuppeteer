
Feature('sp-web-login');


Scenario('pålogging via api @ansattporten', async ({I}) => {
await I.amOnPage('http://test-client-ansattporten-systest.dev.eid.digdirnfl.no/');
await I.click('Login');
await I.click('testid1');
await I.click('Avbryt');

});
