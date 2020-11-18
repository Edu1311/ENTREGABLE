window.addEventListener("load", function (){
    console.log("el contenido ha cargado");

    var imagenes = [];
    imagenes[0] = "img/sliderr.png";
    imagenes[1] = "img/sliderr2.jpg";
    imagenes[2] = "img/sliderr3.jpg";
    imagenes[3] = "img/sliderr4.jpg";



    var indiceImagenes = 0;
    function cambiarImagenes() {
        document.slider2.src = imagenes[indiceImagenes];
        if (indiceImagenes < 3){
            indiceImagenes = indiceImagenes + 1;

        } else {
            indiceImagenes = 0
        }
    }
    setInterval(cambiarImagenes, 2000);
});