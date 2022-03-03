import flightConstants from "./session3PO";

export function clickDirectFlights() {
    cy.get(flightConstants.directflightsRadioButton).click({ force: true });
}

export function selectShowAllButton(){
    cy.get(flightConstants.showAllButton).first().click();

}

export function selectAirlineCheckbox() {
    cy.get(flightConstants.saudiaCheckbox).click({ force: true });
}

export function selectFlightButton() {
    cy.get(flightConstants.selectFlightButton).first().click({ force: true });
} 