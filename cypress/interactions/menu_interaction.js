import home_page from '../pages/home_page';

class MenuInteraction{

    constructor(){
        this.homePage = new home_page();
    }

    conOpcion(opcionMenu){
        this.homePage.elements.menuPagina(opcionMenu).click()
    }

    paraHombreQueBusca(opcionMenu){
        this.homePage.elements.menuPagina(opcionMenu).trigger('mouseover')
        this.homePage.elements.subMenuHombre().click({force: true})
    }

    paraMujerQueBusca(opcionMenu){
        this.homePage.elements.menuPagina(opcionMenu).trigger('mouseover')
        this.homePage.elements.subMenuMujer().click({force: true})
    }
}

export default MenuInteraction;