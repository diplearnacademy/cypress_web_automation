class AgregarClientePage{

    elements={
        nombreInput : () => cy.get(':nth-child(1) > .form-control'),
        apellidoInput : () => cy.get(':nth-child(2) > .form-control'),
        postalInput : () => cy.get(':nth-child(3) > .form-control'),
        crearClienteButton : () => cy.get('form.ng-dirty > .btn')
    }

    registrarDatosClienteNuevo(){
        this.elements.nombreInput().type("Juan")
        this.elements.apellidoInput().type("Fernandez")
        this.elements.postalInput().type("050505")
        this.elements.crearClienteButton().click()
    }
}

export default AgregarClientePage;