import * as helper from '../../fixtures/Helper/handler';
import * as config from '../../fixtures/Configuration/config';
import * as login from '../../fixtures/pages/loginCC';
import * as apiHandler from '../../fixtures/apiHandler/apiHandler';
import * as profile from '../../fixtures/pages/ProfileCC';

describe('intercept request', () => {


    beforeEach(() => {
        helper.navigateTo(config.homeUrl);
       
      })

    it('Enter the details and verify request payload', function () {
        login.proceedSignIn();
        login.typeUserName(config.username);
        login.typePassword(config.password);
        login.confirmSign();
        apiHandler.interceptAuth();

        cy.wait('@authAPI').then(($login) => {
            let payload = $login.request.body;
            expect(payload.email, 'username match').to.eq(config.username);
            expect(payload.password, 'password match').to.eq(config.password);

        });

    });

    it('Update the first Name / LAst Name and verify the payload', function () {

        login.proceedSignIn();
        login.typeUserName(config.username);
        login.typePassword(config.password);
        login.confirmSign();
        cy.wait(4000)
        helper.navigateTo('https://next-staging-ae.almosafer.com/en/myaccount/profile');
        cy.wait(4000)
        profile.typeFirstName(config.firsName);
        profile.typeLastName(config.lastName);
        // apiHandler.interceptProfileUpdate();
        profile.saveProfile();

        apiHandler.interceptProfileUpdate();

        cy.wait('@profileAPI').then(($profile) => {
            let payload = $profile.request.body;
            expect(payload.FirstName, 'FirstName match').to.eq(config.firsName);
            expect(payload.LastName, 'LastName match').to.eq(config.lastName);

        });
    });

});