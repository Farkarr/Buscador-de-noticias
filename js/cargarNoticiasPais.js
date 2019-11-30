//import { NewsApi } from "./global";

window.addEventListener("load", function () {


    let selectPais = document.querySelector(".pestaña-filtro");

    selectPais.addEventListener("change", mostrarNoticiasPais);

    function mostrarNoticiasPais() {

        var selectedOption = this.options[selectPais.selectedIndex];

        switch (selectedOption.value) {
            case "argentina":
                //noticiasArgentina();
                fetchNews(NewsApiKeys.argentina);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "francia":
                fetchNews(NewsApiKeys.francia);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "venezuela":
                fetchNews(NewsApiKeys.venezuela);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "alemania":
                fetchNews(NewsApiKeys.alemania);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "usa":
                fetchNews(NewsApiKeys.usa);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "italia    ":
                fetchNews(NewsApiKeys.italia);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "uk":
                fetchNews(NewsApiKeys.uk);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "suecia":
                fetchNews(NewsApiKeys.suecia);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "rusia":
                fetchNews(NewsApiKeys.rusia);
                mostrarAncla();
                limpiarBusqueda();
                break;
        }

    }

    

});