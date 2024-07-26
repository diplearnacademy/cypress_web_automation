class LoginPage{


    abrirPagina(){
        cy.visit("/")
    }

    autenticacionManager(){
        cy.get(':nth-child(3) > .btn').click()
    }

}

export default LoginPage;