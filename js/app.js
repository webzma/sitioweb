// Guardar el estado de la columna activa
let columnaActiva = 1;

// Seleccionar las columnas
const columnas = document.querySelectorAll(".columna");

// Escuchar cada columna (click)
columnas.forEach((columna, indice)=>{
    columna.addEventListener("click", ()=>{
        cambiarColumnas(indice);
    });
});

// Cambiar el estado de las columnas

function cambiarColumnas(indice){
    columnas[columnaActiva].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}
