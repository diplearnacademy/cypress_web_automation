/// <reference types="cypress">

describe('Realizar Autenticacion en Saucedemo', () => {
    it('Autenticacion exitosa', () =>{
        cy.visit("/")
        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain.text', "Products")
    })

    it('Autenticacion Usuario Bloqueado', () =>{
        cy.visit("/")
        cy.get('#user-name').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')
    })
})