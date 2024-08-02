class RopaHombrePage{

    elements={
        articuloHombre: () => cy.xpath("//article[@data-id-product='1']//img"),
        agregarCarritoButton: () => cy.xpath("//button[@data-button-action='add-to-cart']")
    }
}

export default RopaHombrePage;
require('cypress-xpath');