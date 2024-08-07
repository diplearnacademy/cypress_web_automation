const modal = require('../pages/modal_checkout');

Cypress.Commands.add("productoAgregadoManeraExitosa", () =>{
    cy.get(modal.ARTICULO_HOMBRE).should("contain.text", "Product successfully added to your shopping cart")
})