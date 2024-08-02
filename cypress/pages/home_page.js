import { reemplazarComodin } from "../utils/elements_transformer";

class HomePage{

    elements={
        menuPagina: (opcion) => cy.get(reemplazarComodin('#category-COMODIN', opcion)),
        subMenuHombre: () => cy.xpath("//a[contains(.,'Men')]"),
        subMenuMujer: () => cy.xpath("//a[contains(.,'Women')]")
    }

}

export default HomePage;
require('cypress-xpath');