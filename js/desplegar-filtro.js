window.addEventListener("load", function(){

    let filtro = document.querySelector(".filtro");

    filtro.addEventListener("click", mostrarFiltro);

    function mostrarFiltro() {
        let pestañaPais = document.querySelector(".pestaña-filtro");  
        
        if(pestañaPais.style.visibility == "hidden"){
            pestañaPais.style.visibility = "visible";
        }else{
            pestañaPais.style.visibility = "hidden";
        }
        
    }
});