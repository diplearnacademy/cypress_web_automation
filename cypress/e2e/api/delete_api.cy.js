/// <reference types="cypress">

describe('REST API usando Cypress', () => {

    it('Consulta DELETE registrando Informacion', () =>{
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/saucedemo/9409"
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})