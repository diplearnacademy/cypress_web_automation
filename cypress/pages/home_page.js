import { reemplazarComodin } from "../utils/elements_transformer";

export function obtenerMenuPagina(opcion) {
    return reemplazarComodin('#category-COMODIN', opcion);
}
export const SUBMENU_HOMBRE = "//a[contains(.,'Men')]";
export const SUBMENU_MUJER = "//a[contains(.,'Women')]";