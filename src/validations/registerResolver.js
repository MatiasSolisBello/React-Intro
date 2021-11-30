import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    /*
    Attempted import error: 'max' is not exported from 'yup' (imported as 'yup').
    
    
    rut: yup
        .max(10, "La contraseña debe tener al menos 6 carácteres")
        .required("Debe ingresar un rut (con guion)"),
    nombre: yup
        .string("El nombre debe ser un texto")
        .required("Debe ingresar un nombre"),
    correo: yup
        .string("El email debe ser un texto")
        .required("Debe ingresar un correo electrónico")
        .email("Debe ingresar un correo electrónico válido"),
    clave: yup
        .required("Debe ingresar una contraseña")
        .min(6, "La contraseña debe tener al menos 6 carácteres")

        */
});

export default yupResolver(schema)