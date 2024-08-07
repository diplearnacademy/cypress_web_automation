/// <reference types="cypress">
const menu = require('../interactions/menu_interaction')
const agregar = require('../tasks/agregar_carrito')
const autenticacion = require('../tasks/realizar_login')
const producto = require('../questions/producto_agregado')
import { ropa, accesorios, arte } from '../utils/constants';

describe('Screenplay V2', () => {

    beforeEach("Cypress Session", ()=>{
        cy.session("Login en My Store", () => {
        cy.visit('/')
        cy.realizarAutenticacion()
        })
    })

    it('Realizar Compra de Ropa (Clothes)', () =>{  
        cy.visit('/')
        cy.abrirOpcionParaHombreQueBusca(ropa)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })

    it('Realizar Compra de Ropa (Accesorios)', () =>{  
        cy.visit('/')
        cy.abrirOpcionParaHombreQueBusca(accesorios)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })

    it('Realizar Compra de Ropa (Arte)', () =>{  
        cy.visit('/')
        cy.abrirOpcionParaHombreQueBusca(arte)
        cy.agregarArticuloCarrito()
        cy.productoAgregadoManeraExitosa()
    })
})