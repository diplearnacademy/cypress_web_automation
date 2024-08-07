/// <reference types="cypress">
const menu = require('../interactions/menu_interaction')
const agregar = require('../tasks/agregar_carrito')
const autenticacion = require('../tasks/realizar_login')
const producto = require('../questions/producto_agregado')
import { ropa, accesorios, arte } from '../utils/constants';

describe('Screenplay V2', () => {
    it('Realizar Compra de Ropa (Clothes)', () =>{  
        cy.realizarAutenticacion()
        cy.abrirOpcionParaHombreQueBusca(ropa)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })

    it('Realizar Compra de Ropa (Accesorios)', () =>{  
        cy.realizarAutenticacion()
        cy.abrirOpcionParaHombreQueBusca(accesorios)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })

    it('Realizar Compra de Ropa (Arte)', () =>{  
        cy.realizarAutenticacion()
        cy.abrirOpcionParaHombreQueBusca(arte)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })
})