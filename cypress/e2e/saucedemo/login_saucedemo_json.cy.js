/// <reference types="cypress">

describe('Realizar Autenticacion en Saucedemo', () => {

    before(function(){
        cy.fixture('data_saucedemo').as("credenciales")
    })

    it('Autenticacion exitosa JSON Individual', () =>{
        cy.visit("/")
        cy.get("@credenciales").then((credencial) => {
            cy.get('#user-name').type(credencial.user)
            cy.get('[data-test="password"]').type(credencial.pass)
            cy.get('#login-button').click()
            cy.get('[data-test="title"]').should('contain.text', "Products")
        })
    })

    it.only('Autenticacion Usuario JSON Multiple', () =>{
        cy.fixture('data_users_saucedemo').then((usuarios) => {
            usuarios.forEach(usuario =>{
                const nick= usuario.user;
                const clave= usuario.pass;
                cy.visit("/")
                cy.get('#user-name').type(nick)
                cy.get('[data-test="password"]').type(clave)
                cy.get('#login-button').click()
                //cy.get('.error-button').should('be.visible')
            })
        })
    })
})