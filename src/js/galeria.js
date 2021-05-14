document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 12; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        // dataset y Id son atributos de HTML5 la cual funcionan para crear atributos personalizados y crear variables
        // o pasar información hacia el html para poder leerlo en otro lugar

//         // Añadir la funcion de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    // console.log(e.target.dataset.imagenId);
    const id = parseInt(e.target.dataset.imagenId);
    // paraseInt es una funcion que convierte un string a un numero
    // console.log(id); // <- ejemplo de la funcion

//     // Generar la Imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    // console.log(imagen); //<- ejemplo
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

//     // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

//     // Cuando se preciona, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    }
//     // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

//     // Cuando se da click en cualquier lado, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
//     // Cuando se preciona el boton, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
}