/// <reference types="cypress">

describe('REST API usando Cypress', () => {
    let respuesta;
    it('Consulta GET Opcion Uno', () =>{
        respuesta = cy.request("http://localhost:3000/saucedemo")
        respuesta.its("status").should("equal", 200)
    })


    it('Consulta GET Opcion Dos', () =>{
        respuesta = cy.request("http://localhost:3000/saucedemo")
        .should((response) => 
            expect(response.status).to.eq(200))
    })

    it('Consulta GET Obteniendo Informacion', () =>{
        cy.request({
            method: "GET",
            url: "http://localhost:3000/saucedemo",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body))

            cy.log(datos)

            expect(datos[0]).has.property("user", "standard_user")
            expect(datos[0]).has.property("pass", "secret_sauce")
        })
    })
})