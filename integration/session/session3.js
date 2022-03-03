import  * as command from  "../../fixtures/pages/session3CC";


describe('Session03 Excercise', function () {

    before(() => {
        cy.visit('https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult');
      })

    it('Check Stop Filter Radio Button', function () {
        command.clickDirectFlights();
    });

    it('Click Show All Button', function () {
        command.selectShowAllButton();        
    });

    it('Check Airline Filter Checkbox', function () {
        command.selectAirlineCheckbox();        
    });

    it('Select the first Flight button from Filtered result', function () {
        command.selectFlightButton();   
    });


});