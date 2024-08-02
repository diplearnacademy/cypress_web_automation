import modal_checkout from '../pages/modal_checkout'

class ProductoAgregado{
    constructor(){
        this.modalCheckout = new modal_checkout();
    }

    deManeraExitosa(){
        this.modalCheckout.elements.articuloHombre().should("contain.text", "Product successfully added to your shopping cart")
    }

}

export default ProductoAgregado;