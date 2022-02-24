describe('Web Automation', function() {
    it('Cypress Commands', function() {
    cy.visit("https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html");
    cy.get('[name=namec]').type('Kannan Thiyagarajan')
    cy.get('input[placeholder^=Street]').type('Dubai')
    cy.get('input[name=zipcode]').type('646')
    cy.get('select').select('France')
    cy.get('input[name=email]').type('kannan.thiyagarajan@seera.sa')
    cy.get('label[for=radio_1]').click()
    cy.get('input#check_1').check(['Prpoposal'],{ force: true })
    cy.get('input#check_3').check(['Narrative'],{ force: true })
    cy.get('[type=submit]').click()
    //cy.get('input[type=checkbox]').check('Prpoposal')
    
    });
});