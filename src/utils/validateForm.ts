import * as yup from 'yup';

/**
 * Esta es la forma de usar YUP para validaciones n React. Debemos
 * crear una funcion en la cual, a traves de la importacion de yup
 * vamos a acceder a todos sus metodos.
 * 
 * Lo primero es definir el tipo de dato, usando shape podemos dar
 * mas detalles de los valores internos del dato y de esta forma
 * podemos definir validaciones anidadas de esas propiedades, etc
 * 
 * TODO: Revisar la documentacion de YUP
 */
export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required('El username es requerido'),
    password: yup.string().trim().required('El password es requerido'),
});