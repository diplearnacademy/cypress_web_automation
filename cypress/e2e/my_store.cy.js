/// <reference types="cypress">
import menu_interaction from "../interactions/menu_interaction"
import agregar_carrito from "../tasks/agregar_carrito"
import producto_agregado from "../questions/producto_agregado"
import { ropa, accesorios, arte } from '../utils/constants';

describe('Template para pruebas en Cypress', () => {
    const abrirMenu = new menu_interaction();
    const agregar = new agregar_carrito();
    const productoAgregado = new producto_agregado();

    beforeEach(()=>{
        cy.visit("/")
    })


    it('Realizar Compra de Ropa (Clothes)', () =>{    
        //abrirMenu.conOpcion(clothes)
        abrirMenu.paraHombreQueBusca(ropa)
        agregar.articuloAlCarrito()
        productoAgregado.deManeraExitosa()
    })
})