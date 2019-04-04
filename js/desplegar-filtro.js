window.addEventListener("load", function(){

    let filtro = document.querySelector(".filtro");

    filtro.addEventListener("click", mostrarFiltro);

    function mostrarFiltro() {
        var pestañaPais = document.querySelector(".pestaña-filtro");  
        
        // pestañaPais.style.visibility = "visible";

        if(pestañaPais.style.visibility != "visible"){
            pestañaPais.style.visibility = "visible";
        }else{
            pestañaPais.style.visibility = "hidden";
        }
        
    }
});