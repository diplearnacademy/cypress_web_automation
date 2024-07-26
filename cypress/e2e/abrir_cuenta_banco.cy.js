/// <reference types="cypress">
import login_page from '../pages/general/login_page';
import menu_manager_page from '../pages/general/menu_manager_page';
import agregar_cliente_page from '../pages/manager/agregar_cliente_page';

describe('Aperturar Cuentas para Usuarios con una Manager', () => {
    const loginPage = new login_page();
    const menuManagerPage = new menu_manager_page();
    const agregarCliente = new agregar_cliente_page();


    it('Abrir una cuenta nueva', () =>{
        loginPage.abrirPagina()
        loginPage.autenticacionManager()
        menuManagerPage.crearNuevoCliente()
        agregarCliente.registrarDatosClienteNuevo()
        menuManagerPage.verListadoClientes()
    })
})