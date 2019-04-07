window.addEventListener("load", () => {

    var ajax = new XMLHttpRequest();
    
    ajax.open("GET", "https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=308ccf64283c4e479da642742b092324", true);
    ajax.onreadystatechange = cargarNoticias;
    ajax.send(null);
    let imagenes = [];
    let titulos = [];
    let subTituloNoticia = [];
    let urlNoticia = [];
    

    slider(imagenes, titulos, subTituloNoticia, urlNoticia);

    function cargarNoticias(){

        if(ajax.readyState == 4){

             let datosNoticias = ajax.response;
             let articulos = JSON.parse(datosNoticias);
             
            articulos.articles.forEach(e => {

                // let contenedorNoticia = document.querySelector(".cont-noticia");

                // let infoNoticias = `

                //     <img src="" class="img-noticia">
                //     <h2 class="titulo-slider-noticia">${e.title}</h2>
                //     <h3 class="subt-slider-noticia">${e.description}</h3>
                // `;
                // contenedorNoticia.insertAdjacentHTML("beforeend", infoNoticias);

                imagenes.push(e.urlToImage);
                titulos.push(e.title);
                subTituloNoticia.push(e.description);
                urlNoticia.push(e.url);

            });
        }
    }
});