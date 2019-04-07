window.addEventListener("load", function () {

    let palabraBuscada = document.querySelector(".buscador-caja");
    let listaNoticias = document.querySelector(".lista-noticias");
    
    let botonBusqueda = document.querySelector(".boton-busqueda");
    
    botonBusqueda.addEventListener("click", function (e) {

        e.preventDefault();
        listaNoticias.style.display = "block";
        let palabra = palabraBuscada.value;
        limpiarBusqueda()
        
        let url = "https://newsapi.org/v2/everything?sources=abc-news&apiKey=308ccf64283c4e479da642742b092324";

        let req = new Request(url);

        fetch(req).then(response => response.json())
                    .then(data => {
                        
                        data.articles.forEach(e => {
                            let titulo = e.title;
                            let tituloSplitMinus = titulo.toLowerCase().split(" ");
                            
                            let descripcion = e.description//.substr(0, 40);
                            let descSplitMinus = descripcion.toLowerCase().split(" ");
                            // console.log(descSplitMinus)
                            
                            let contenido = e.content;
                            let contSplitMinus = contenido.toLowerCase().split(" ");
                            
                            let i = 0, x = 0, y = 0;
                            for(i, x, y; i < tituloSplitMinus.length, x < descSplitMinus.length, y < contSplitMinus.length; i++, x++, y++){
                                
                                if (tituloSplitMinus[i] == palabra || descSplitMinus[x] == palabra || contSplitMinus[y] == palabra) {

                                    
                                    let palabraBuscada = `

                                        <article class="article-class">
                                            <img src="${e.urlToImage}" alt="" class="logo-periodico">
                                            <div class="titulo-subt-lista">
                                                <h3 class="titulo-noticia-lista">${titulo}</h3>
                                                <p class="subt-noticia-lista">${descripcion}</p>
                                                <a href="${e.url}" target="_blank" class="info-noticia">Mas info...</a>
                                            </div>
                                        </article>
                                    `;

                                    listaNoticias.insertAdjacentHTML("beforeend", palabraBuscada);
                                }
                            }
                        });

                    });

    });

});