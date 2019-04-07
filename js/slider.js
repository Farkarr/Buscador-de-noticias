
function slider(imgNot, titulo, descripcion, urlNot) {

    //Botones de avanzar y retroceder el slider
    let botonAtras = document.querySelector(".atras-slider");
    let botonDelante = document.querySelector(".delante-slider");

    // Contador del slider
    let cont = 0;

    // Son las imagenes del slider
    let imgNoticias = imgNot;
    let img = document.querySelector(".img-noticia");

    // Es es el elemento h2 que representa el titulo de la noticia
    let tituloNoticia = titulo;
    let tituloNoticiaH2 = document.querySelector(".titulo-slider-noticia");

    // Es el elemento h3 que representa el subtitulo de la noticia
    let descNoticia = descripcion;
    let subtNoticiaH3 = document.querySelector(".subt-slider-noticia");

    // Aqui pongo las urls de cada noticia
    let urlNotSlider = urlNot;
    let urlDeNot = document.querySelector(".url-noticia");

    // let contSlider = document.getElementById("cont-slider");
    let slide;
    let tituloSubt = document.querySelector(".titulo-subtitulo");

    //Ejecutan las funciones de avanzar y retroceder las imagenes del slider.
    botonAtras.addEventListener("click", retrocederImg);
    botonDelante.addEventListener("click", pasarImg);



    function pasarImg() {

        if (cont >= imgNoticias.length - 1) {
            cont = 0;
        } else {
            cont++;
        }
        img.src = imgNoticias[cont];
        tituloNoticiaH2.innerText = tituloNoticia[cont];
        subtNoticiaH3.innerText = descNoticia[cont];
        urlDeNot.href = urlNotSlider[cont];
        tituloSubt.style.display = "block";

        // stopSlide();
    }

    function retrocederImg() {

        if (cont <= 0) {
            cont = imgNoticias.length - 1;
        } else {
            cont--;
        }
        img.src = imgNoticias[cont];
        tituloNoticiaH2.innerText = tituloNoticia[cont];
        tituloSubt.style.display = "block";

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



