window.addEventListener("load", function () {


    let selectPais = document.querySelector(".pestaña-filtro");

    selectPais.addEventListener("change", mostrarNoticiasPais);

    function mostrarNoticiasPais() {

        var selectedOption = this.options[selectPais.selectedIndex];

        if (selectedOption.value == "francia") {

            let listaNoticias = document.querySelector(".lista-noticias");
            listaNoticias.style.display = "block";
            
            let url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=308ccf64283c4e479da642742b092324";

            let req = new Request(url);
            fetch(req)
                .then(response => response.json())
                .then(response => {
                    response.articles.forEach(e => {

                        
                        let noticias = `

                            <article class="article-class">
                                <img src="" alt="" class="logo-periodico">
                                <h3 class="titulo-noticia-lista">${e.title}</h3>
                                <p class="subt-noticia-lista"></p>.
                                <a href="#">Leer mas...</a>
                            </article>
                        `;

                        listaNoticias.insertAdjacentHTML('beforeend', noticias);
                        
                    });
                });
        }

    }


});