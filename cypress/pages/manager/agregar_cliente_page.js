class AgregarClientePage{

    registrarDatosClienteNuevo(){
        cy.get(':nth-child(1) > .form-control').type("Juan")
        cy.get(':nth-child(2) > .form-control').type("Fernandez")
        cy.get(':nth-child(3) > .form-control').type("050505")
        cy.get('form.ng-dirty > .btn').click()
    }

}

export default AgregarClientePage;