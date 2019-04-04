window.addEventListener("load", function () {

    let palabraBuscada = document.querySelector(".buscador-caja");
    let listaNoticias = document.querySelector(".lista-noticias");
    
    let botonBusqueda = document.querySelector(".boton-busqueda");
    botonBusqueda.addEventListener("click", function (e) {

        e.preventDefault();
        listaNoticias.style.display = "block";
        let palabra = palabraBuscada.value;

        let url = "https://newsapi.org/v2/everything?sources=abc-news&apiKey=308ccf64283c4e479da642742b092324";

        let req = new Request(url);

        fetch(req).then(response => response.json())
                    .then(data => {
                        
                        data.articles.forEach(e => {
                            let titulo = e.title;

                            let tituloSplit = titulo.split(" ");
                            
                            for(let i in tituloSplit){
                                
                                if (tituloSplit[i] == palabra) {

                                    
                                    let noticiaBuscada = `

                                        <article class="article-class">
                                            <img src="" alt="" class="logo-periodico">
                                            <h3 class="titulo-noticia-lista">${titulo}</h3>
                                            <p class="subt-noticia-lista"></p>.
                                            <a href="#">Leer mas...</a>
                                        </article>
                                    `;
                                    console.log(titulo)

                                    listaNoticias.innerHTML = noticiaBuscada;
                                }
                            }
                        });

                    });

    });

function buscarNoticia(articulos, palabraClave) {

    let array = [];

    for (let i in articulos) {
        let noticia = articulos[i];

        array.push(noticia.title)
    }
    console.log(array)
    // return array.indexOf(palabraClave) > -1;
}




});