import ropa_hombre_page from '../pages/ropa_hombre_page';

class AgregarCarrito{

    constructor(){
        this.ropaHombrePage = new ropa_hombre_page();
    }

    articuloAlCarrito(){
        this.ropaHombrePage.elements.articuloHombre().click()
        this.ropaHombrePage.elements.agregarCarritoButton().click()
    }

}

export default AgregarCarrito;