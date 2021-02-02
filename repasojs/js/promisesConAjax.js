// Promesas con Ajax
const descargarUsuarios = cantidad => new Promise(( resolve, reject) => {
    // PASAR LA CANTIDAD DE LA API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // LLAMANDO A AJAX
    const xhr = new XMLHttpRequest();

    // ABRIMOS LA CONEXIÓN
        xhr.open('GET', api, true);

        // ON LOAD
        xhr.onload = () => {
            if(xhr.status === 200) {
                resolve( JSON.parse(xhr.responseText).results );
            } else {
                reject(Error(xhr.statusText));
            }
        }

        // ESTE PASO ES OPCIONAL (ON ERROR)
        xhr.onerror = (error) => reject(error);

        // ENVIAMOS
        xhr.send()
});

descargarUsuarios(30)
    .then( 
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error ' + error)
    ));

    function imprimirHTML(usuarios) {
        let html = '';
        usuarios.forEach(usuario => {
            html += `
                <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    País: ${usuario.nat}
                    Foto: 
                        <img src="${usuario.picture.medium}">
                </li>
            `;
        });
        
        const contenedorApp = document.querySelector('#app');
        contenedorApp.innerHTML = html;
    }