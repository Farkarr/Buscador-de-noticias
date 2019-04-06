window.addEventListener("load", function () {


    let selectPais = document.querySelector(".pestaña-filtro");

    selectPais.addEventListener("change", mostrarNoticiasPais);

    function mostrarNoticiasPais() {

        var selectedOption = this.options[selectPais.selectedIndex];

        switch (selectedOption.value) {
            case "argentina":
                noticiasArgentina();
                mostrarAncla();
                break;

            case "francia":
                noticiasFrancia();
                mostrarAncla();
                break;

            // case "venezuela":
            //     noticiasVenezuela();
            //     mostrarAncla();
            //     break;

            // case "alemania":
            //     noticiasAlemania();
            //     mostrarAncla();
            //     break;

            // case "usa":
            //     noticiasUsa();
            //     mostrarAncla();
            //     break;

            // case "italia    ":
            //     noticiasItalia();
            //     mostrarAncla();
            //     break;

            // case "uk":
            //     noticiasUK();
            //     mostrarAncla();
            //     break;

            // case "suecia":
            //     noticiasSuecia();
            //     mostrarAncla();
            //     break;

            // case "rusia":
            //     noticiasRusia();
            //     mostrarAncla();
            //     break;
        }

    }

    

});