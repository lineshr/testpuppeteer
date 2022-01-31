
Feature('sp-web-login');


Scenario('pålogging via api @ansattporten', async ({I}) => {
await I.amOnPage('http://test-client-ansattporten-systest.dev.eid.digdirnfl.no/');
                    await I.see('Login with Ansattporten');
await I.click('Login');


    await I.see('Login with whatever you want');
    await I.see('Ansattporten allows you to log in on behalf of an organisation.');
    await I.see('Help to log in');
    await I.see('security-and-privacy');


});
