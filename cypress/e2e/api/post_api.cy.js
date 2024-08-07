/// <reference types="cypress">

describe('REST API usando Cypress', () => {

    it('Consulta POST registrando Informacion', () =>{
        cy.request({
            method: "POST",
            url: "http://localhost:3000/saucedemo",
            body: {
                "user": "pepe_perez",
                "pass": "password"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })
})