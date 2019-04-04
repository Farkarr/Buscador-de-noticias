function noticiasFrancia() {
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

function noticiasArgentina() {
    let listaNoticias = document.querySelector(".lista-noticias");
    listaNoticias.style.display = "block";

    let url = "https://newsapi.org/v2/top-headlines?country=ar&apiKey=308ccf64283c4e479da642742b092324";

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

// function noticiasAlemania() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=de&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }

// function noticiasVenezuela() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=ve&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }

// function noticiasRusia() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }

// function noticiasSuecia() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=se&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }

// function noticiasUsa() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }

// function noticiasUK() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }

// function noticiasItalia() {
//     let listaNoticias = document.querySelector(".lista-noticias");
//             listaNoticias.style.display = "block";

//             let url = "https://newsapi.org/v2/top-headlines?country=it&apiKey=308ccf64283c4e479da642742b092324";

//             let req = new Request(url);
//             fetch(req)
//                 .then(response => response.json())
//                 .then(response => {
//                     response.articles.forEach(e => {


//                         let noticias = `

//                             <article class="article-class">
//                                 <img src="" alt="" class="logo-periodico">
//                                 <h3 class="titulo-noticia-lista">${e.title}</h3>
//                                 <p class="subt-noticia-lista"></p>.
//                                 <a href="#">Leer mas...</a>
//                             </article>
//                         `;

//                         listaNoticias.insertAdjacentHTML('beforeend', noticias);

//                     });
//                 });
// }