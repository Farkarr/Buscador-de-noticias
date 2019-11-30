function fetchNews(pais) {
    
    let listaNoticias = document.querySelector(".lista-noticias");
    
    listaNoticias.style.display = "block";

    let url = `https://newsapi.org/v2/top-headlines?country=${pais}`;
    console.log(url);
    let req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(response => {
            response.articles.forEach(e => {

                
                if (e.description != null) {
                            
                    let noticias = `

                        <article class="article-class">
                            <img src="${e.urlToImage}" alt="" class="logo-periodico">
                            <div class="titulo-subt-lista">
                                <h3 class="titulo-noticia-lista">${e.title}</h3>
                                <p class="subt-noticia-lista">${e.description.substring(0, 160)}...</p>
                                <a href="${e.url}" target="_blank" class="info-noticia">Mas info...</a>
                            </div>
                        </article>
                    `;

                    listaNoticias.insertAdjacentHTML('beforeend', noticias);
                }
                
                
                
            });
        });
}