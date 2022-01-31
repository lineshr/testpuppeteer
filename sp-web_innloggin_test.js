
Feature('sp-web-login');


Scenario('pålogging via api @ansattporten', async ({I}) => {
await I.amOnPage('http://test-client-ansattporten-systest.dev.eid.digdirnfl.no/');
                    await I.see('Login with Ansattporten');
await I.click('Login');


    await I.see('Slik skaffar du deg elektronisk ID');
    await I.see('Ansattporten let deg logga inn på vegne av ei verksemd.');
    await I.see('Hjelp til innlogging');
    await I.see('Tryggleik og personvern');


});
