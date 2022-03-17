export function interceptAuth(){
    cy.intercept('POST','api/account/v2/auth/local').as('authAPI');
}

export function interceptProfileUpdate(){
    cy.intercept('PUT', 'api/account/v2/user/*').as('profileAPI');
}