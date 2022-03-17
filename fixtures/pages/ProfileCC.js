import profileConstants from './ProfilePO';

export function typeFirstName(data){
    cy.get(profileConstants.firstNameTxt).type(data);
}

export function typeLastName(data){
    cy.get(profileConstants.lastNameTxt).type(data);
}

export function saveProfile(){
    cy.get(profileConstants.saveBtn).click();
}