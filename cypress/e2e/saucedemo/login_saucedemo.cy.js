/// <reference types="cypress">

describe('Realizar Autenticacion en Saucedemo', () => {
    it('Autenticacion exitosa', () =>{
        cy.visit("/")
        cy.digitarCredenciales('#user-name','standard_user')
        cy.digitarCredenciales('[data-test="password"]','secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('contain.text', "Products")
        
    })
})