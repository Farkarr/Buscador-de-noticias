//import { NewsApi } from "./global";

window.addEventListener("load", function () {


    let selectPais = document.querySelector(".pestaña-filtro");

    selectPais.addEventListener("change", mostrarNoticiasPais);

    function mostrarNoticiasPais() {

        var selectedOption = this.options[selectPais.selectedIndex];

        switch (selectedOption.value) {
            case "argentina":
                //noticiasArgentina();
                fetchNews(NewsApi.argentina);
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "francia":
                noticiasFrancia();
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "venezuela":
                noticiasVenezuela();
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "alemania":
                noticiasAlemania();
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "usa":
                noticiasUsa();
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "italia    ":
                noticiasItalia();
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "uk":
                noticiasUK();
                mostrarAncla();
                limpiarBusqueda();
                capturarNot()
                break;

            case "suecia":
                noticiasSuecia();
                mostrarAncla();
                limpiarBusqueda();
                break;

            case "rusia":
                noticiasRusia();
                mostrarAncla();
                limpiarBusqueda();
                break;
        }

    }

    

});