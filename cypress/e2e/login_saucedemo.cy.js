/// <reference types="cypress">

describe('Realizar Autenticacion en Saucedemo', () => {
    it('Autenticacion exitosa', () =>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain.text', "Products")
    })

    it.only('Autenticacion Usuario Bloqueado', () =>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('#user-name').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })

})