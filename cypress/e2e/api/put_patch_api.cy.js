/// <reference types="cypress">

describe('REST API usando Cypress', () => {

    it('Consulta PUT registrando Informacion', () =>{
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/saucedemo/1236",
            body: {
                "user": "federico",
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })

    it('Consulta PATCH registrando Informacion', () =>{
        cy.request({
            method: "PATCH",
            url: "http://localhost:3000/saucedemo/1236",
            body:  {
                "pass": "password",
                "cedula": "1088"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
})