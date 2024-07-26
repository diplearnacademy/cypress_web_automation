class ListarClientesPage{

    elements={
        tablaClientes : () => cy.get('.table-striped')
    }

    validarClienteCreadoConExito(){
        this.elements.tablaClientes()
        .find("tbody")
        .find("tr")
        .each(($row) => {
            cy.wrap($row)
            .find("td")
            .each(($cell) =>{
                cy.wrap($cell)
                .invoke('text')
                .then((cellText) => {
                    if(cellText.includes("Juan")){
                        expect(cellText).to.include("Juan")
                    }
                })
            }) 
     })
    }
}


export default ListarClientesPage;