/// <reference types="cypress">
import login_page from '../pages/general/login_page';
import menu_manager_page from '../pages/general/menu_manager_page';
import agregar_cliente_page from '../pages/manager/agregar_cliente_page';
import listar_clientes_page from '../pages/manager/listar_clientes_page';
import { crearCliente, agregarCuenta, listarClientes } from '../utils/constants';

describe('Aperturar Cuentas para Usuarios con una Manager', () => {
    const loginPage = new login_page();
    const menuManagerPage = new menu_manager_page();
    const agregarCliente = new agregar_cliente_page();
    const listaClientes = new listar_clientes_page();

    loginPage.abrirPagina()

    it('Abrir una cuenta nueva', () =>{
        loginPage.autenticacionManager()
        menuManagerPage.seleccionarOpcionMenuPara(crearCliente)
        agregarCliente.registrarDatosClienteNuevo()
        menuManagerPage.seleccionarOpcionMenuPara(listarClientes)
        listaClientes.validarClienteCreadoConExito()
    })
})