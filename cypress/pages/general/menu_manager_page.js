class MenuManagerPage{

    crearNuevoCliente(){
        cy.get('[ng-class="btnClass1"]').click()
    }

    abrirCuentaClientes(){
        cy.get('[ng-class="btnClass2"]').click();
    }

    verListadoClientes(){
        cy.get('[ng-class="btnClass3"]').click();
    }
}

export default MenuManagerPage;