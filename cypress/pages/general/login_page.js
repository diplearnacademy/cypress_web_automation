class LoginPage{

    elements={
        managerLoginButton : () => cy.get(':nth-child(3) > .btn')
    }

    abrirPagina(){
        beforeEach(()=>{
            cy.visit("/")
            cy.title().should('eq', 'XYZ Bank')
        })
    }

    autenticacionManager(){
        this.elements.managerLoginButton().click()
    }

}

export default LoginPage;