/// <reference types="cypress">

describe('Realizar Autenticacion en Saucedemo', () => {
    it('Autenticacion exitosa', () =>{
        cy.visit("/")
        cy.digitarCredenciales('#user-name','standard_user')
        cy.digitarCredenciales('[data-test="password"]','secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('contain.text', "Products")
        
    })

    it('Autenticacion bloqueado', () =>{
        cy.visit("/")
        cy.digitarCredenciales('#user-name','locked_out_user')
        cy.digitarCredenciales('[data-test="password"]','secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('contain.text', "Products")
        
    })

    it('Autenticacion problemas', () =>{
        cy.visit("/")
        cy.digitarCredenciales('#user-name','problem_user')
        cy.digitarCredenciales('[data-test="password"]','secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('contain.text', "Products")
        
    })

    it('Autenticacion Error', () =>{
        cy.visit("/")
        cy.digitarCredenciales('#user-name','error_user')
        cy.digitarCredenciales('[data-test="password"]','secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('contain.text', "Products")
        
    })
})