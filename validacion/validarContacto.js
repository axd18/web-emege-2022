export default function validarContacto(valores) {
    let errores = {};

    // validar el nombre del usuario
    if(!valores.nombre){
        errores.nombre = "El nombre el obligatorio"
    }

    // validar el email
    if(!valores.email) {
        errores.email = "El email es obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        errores.email = "Email no válido"
    }

    // Validar Provincia
    if(!valores.provincia){
        errores.provincia = "La provincia es obligatoria"
    }

    // Validar Localidad
    if(!valores.localidad){
        errores.localidad = "La localidad es obligatoria"
    }

    // Validar message
    if(!valores.message){
        errores.message = "El mensaje es obligatorio"
    }

    return errores;
}