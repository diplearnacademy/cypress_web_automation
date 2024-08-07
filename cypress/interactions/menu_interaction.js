const home_page = require('../pages/home_page')

Cypress.Commands.add("abrirOpcionParaHombreQueBusca", (opcionMenu) =>{
    cy.get(home_page.obtenerMenuPagina(opcionMenu)).trigger('mouseover')
    cy.xpath(home_page.SUBMENU_HOMBRE).click({force: true})
})

Cypress.Commands.add("abrirOpcionParaMujerQueBusca", (opcionMenu) =>{
    cy.get(home_page.obtenerMenuPagina(opcionMenu)).trigger('mouseover')
    cy.xpath(home_page.SUBMENU_MUJER).click({force: true})
})