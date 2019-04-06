window.addEventListener("load", function(){
	
    const ajax = new XMLHttpRequest();
    
    ajax.open("POST", "ServletNoticia", true);
    ajax.send("hola")
	
});