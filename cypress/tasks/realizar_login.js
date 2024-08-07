const login = require('../pages/login_page');

Cypress.Commands.add("realizarAutenticacion", () =>{
    cy.get(login.SIGN_IN).click()
    cy.get(login.USER_INPUT).type("juan@test.com")
    cy.get(login.PASS_INPUT).type("1234567")
    cy.get(login.LOGIN_BUTTON).click() 
})