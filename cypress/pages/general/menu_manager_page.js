import { reemplazarComodin } from '../../utils/elements_transformer';

class MenuManagerPage{

    elements={
        opcionMenu: (opcion) => cy.get(reemplazarComodin('[ng-class="btnClassCOMODIN"]', opcion)),
    }

    seleccionarOpcionMenuPara(opcionElegida) {
        this.elements.opcionMenu(opcionElegida).click();
    }
}

export default MenuManagerPage;