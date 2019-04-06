$(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      var codigo = "#" + $(this).data("ancla");
      //Funcionalidad de scroll lento para el enlace ancla en 3 segundos
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 1000);
    });
  });

  function mostrarAncla() {
      
    let ancla = document.querySelector(".ancla");

    if (ancla.style.display != "inline") {
        ancla.style.display = "inline";
    }

  }