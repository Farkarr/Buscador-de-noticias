window.addEventListener("load", () => {
    
    var botonAtras = document.querySelector(".atras-slider");
    var botonDelante = document.querySelector(".delante-slider");
    var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg"];
    var cont = 0;
    var img = document.querySelector(".img-noticia");   
    
    botonAtras.addEventListener("click", retrocederImg);
    botonDelante.addEventListener("click", pasarImg);



    function pasarImg() {

        if (cont >= imagenes.length - 1) {
            cont = 0;
        }else{
            cont++;
        }
        img.src = "./img/" + imagenes[cont];
    }

    function retrocederImg() {

        if (cont <= 0) {
            cont = imagenes.length - 1;
        }else{
            cont--;
        }
        img.src = "./img/" + imagenes[cont];
    }



});