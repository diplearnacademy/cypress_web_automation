/// <reference types="cypress">

describe('Key Authentication', () => {
    it('Key desde URL', () =>{
        cy.request({
            method: "GET",
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
            qs: {
                sol: 1000,
                camera: "chemcam",
                api_key: "nfGsccEHP5LLJup9CUOOvD11H3Xo4O5jumrS06fI"
            },
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let datos;
            datos = response.body
    
            cy.log(datos)
            expect(response.status).to.eq(200)
        })
    })

    it.only('Credenciales API', () =>{
        const user = 'postman'
        const password = 'password'

        const baseCredentials = btoa(`${user}:${password}`)

        cy.request({
            method: "GET",
            url: "https://postman-echo.com/basic-auth",
            headers: {
                Authorization: `Basic ${baseCredentials}`
            }
        }).then(response => {
            let datos;
            datos = response.body
            cy.log(datos)
            expect(response.status).to.eq(200)
        })
    })


    it.only('Bearer Token API', () =>{
        const user = 'postman'
        const password = 'password'

        const baseCredentials = btoa(`${user}:${password}`)

        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients/",
            body: {
                clientName: "Carlos",
                clientEmail: "carlosat@example.com"
            }
        }).then(response => {
            expect(response.status).to.eq(201)

            const token = response.body.accessToken

            cy.log(`Token: ${token}`)
        })
    })

})