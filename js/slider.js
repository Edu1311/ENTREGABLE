window.addEventListener("load", function (){
    console.log("el contenido ha cargado");

    var imagenes = [];
    imagenes[0] = "img/slider.jpg";
    imagenes[1] = "img/slider7.jpg";
    imagenes[2] = "img/slider3.jpg";
    imagenes[3] = "img/slider4.jpg";
    imagenes[4] = "img/slider8.jpg";
    imagenes[5] = "img/slider6.jpg";

    var indiceImagenes = 0;
    function cambiarImagenes() {
        document.slider.src = imagenes[indiceImagenes];
        if (indiceImagenes < 5){
            indiceImagenes = indiceImagenes + 1;

        } else {
            indiceImagenes = 0
        }
    }
    setInterval(cambiarImagenes, 2000);
});