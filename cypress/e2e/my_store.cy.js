/// <reference types="cypress">
const menu = require('../interactions/menu_interaction')
const agregar = require('../tasks/agregar_carrito')
const producto = require('../questions/producto_agregado')
import { ropa, accesorios, arte } from '../utils/constants';

describe('Screenplay V2', () => {
    it('Realizar Compra de Ropa (Clothes)', () =>{  
        cy.abrirOpcionParaHombreQueBusca(ropa)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })
})