// Promesas
const aplicarDescuento = new Promise(( resolve, reject ) => {
    setTimeout( () => {
        let descuento = true;

        if( descuento ) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
});

// ejemplo 2
const nombreCorrecto = new Promise(( resolve, reject)  => {
    setTimeout( () => {

        let nombre = true;

        if( nombre ) {
            resolve('El nombre es correcto');
        } else {
            reject('El nombre no es correcto');
        }
    }, 3000);
});

nombreCorrecto.then(nCorrecto => {
    console.log(nCorrecto);
});