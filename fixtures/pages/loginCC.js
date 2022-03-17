import loginConstants from './loginPO';

export function proceedSignIn(){
    cy.get(loginConstants.signInBtn).click();
}

export function typeUserName(username){
    cy.get(loginConstants.emailTxt).type(username);
}

export function typePassword(password){
    cy.get(loginConstants.passwordTxt).type(password);
}

export function confirmSign(){
    cy.get(loginConstants.confirmSignInBtn).click();
}