window.addEventListener("load", function () {


    let selectPais = document.querySelector(".pestaña-filtro");

    selectPais.addEventListener("change", mostrarNoticiasPais);

    function mostrarNoticiasPais() {

        var selectedOption = this.options[selectPais.selectedIndex];

        switch (selectedOption.value) {
            case "argentina":
                noticiasArgentina();
                break;

            case "francia":
                noticiasFrancia();
                break;

            // case "venezuela":
            //     noticiasVenezuela();
            //     break;

            // case "alemania":
            //     noticiasAlemania();
            //     break;

            // case "usa":
            //     noticiasUsa();
            //     break;

            // case "italia    ":
            //     noticiasItalia();
            //     break;

            // case "uk":
            //     noticiasUK();
            //     break;

            // case "suecia":
            //     noticiasSuecia();
            //     break;

            // case "rusia":
            //     noticiasRusia();
            //     break;
        }

    }


});