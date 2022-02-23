describe('Test Description', function() {
    it('Testing Fields', function() {
    cy.visit("http://10.72.4.107:5500/example/e.html");
    cy.get('[name=email]').type('testing')
    
    });
});