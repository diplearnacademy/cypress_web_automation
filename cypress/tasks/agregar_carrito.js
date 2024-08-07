const ropa_hombre_page = require('../pages/ropa_hombre_page');

Cypress.Commands.add("agregarArticuloCarrito", () =>{
    cy.xpath(ropa_hombre_page.ARTICULO_HOMBRE).click()
    cy.xpath(ropa_hombre_page.AGREGAR_CARRITO).click()
})