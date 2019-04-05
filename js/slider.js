
function slider(imgNot) {

    let botonAtras = document.querySelector(".atras-slider");
    let botonDelante = document.querySelector(".delante-slider");
    let cont = 0;
    let imgNoticias = imgNot;
    let img = document.querySelector(".img-noticia");
    let slide

    botonAtras.addEventListener("click", retrocederImg);
    botonDelante.addEventListener("click", pasarImg);



    function pasarImg() {

        if (cont >= imgNoticias.length - 1) {
            cont = 0;
        } else {
            cont++;
        }
        img.src = imgNoticias[cont];

        // stopSlide();
    }

    function retrocederImg() {

        if (cont <= 0) {
            cont = imgNoticias.length - 1;
        } else {
            cont--;
        }
        img.src = imgNoticias[cont];

        // stopSlide();
    }
    
    // function stopSlide() {
    //     clearInterval(slide);
    // }

    function playSlide() {
        
        slide = setInterval(pasarImg, 5000);
    }

    playSlide()
}



