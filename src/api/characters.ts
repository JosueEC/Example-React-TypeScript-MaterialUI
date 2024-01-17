import { instance } from "./base.api";

/**
 * Creamos archivos por cada endpoint de nuestra API, en este caso
 * este es el archivo para manipular los recursos de 'characters'
 */
const endpoint = 'character';

/**
  * En estas funciones usamos la instancia de axios que creamos en
 * el base.api.
 * 
 * Para el caso de usar un .get() este puede recibir un objeto con
 * parametros, es por eso que enviamos la page para nosotros poder
 * definir el numero de pagina que deseamos.
 */
const findAll = ({ page = 1 }: { page?: number }) => {
    return instance.get(endpoint, { params: {
        page
    }});
};

const findById = ({ id }: { id: number }) => {
    return instance.get(endpoint, {
        params: {
            id,
        }
    });
};

/**
 * Podemos exportar un objeto el cual contendra todas las funciones
 * disponibles para este endpoint en especifica. De esta forma 
 * importamos el objeto characters y podemos acceder a sus endpoints
 * cons 'dot notation'
 */
export const characters = {
    findAll,
    findById,
};