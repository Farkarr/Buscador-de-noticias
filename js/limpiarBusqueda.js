function limpiarBusqueda() {

    let limpiarBusqueda = document.querySelector(".limpiar-busqueda");
    let listaNoticias = document.querySelector(".lista-noticias");
    
    limpiarBusqueda.addEventListener("click", function(){
        listaNoticias.innerHTML = " ";
    });
    
    if (limpiarBusqueda.style.display != "block") {
        limpiarBusqueda.style.display = "block";
    }
}