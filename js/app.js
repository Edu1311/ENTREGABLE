(function (){
    const quotes = [
        {
            cita: " Trátame Suavemente",
            autor: "Soda Stereo"
        },
        {
            cita: " Don de Fluir",
            autor: "Jorge Drexler"
        },
        {
            cita: " Yellow Ledbetter",
            autor: "Pearl Jam"
        },
        {
            cita: " Entre Canibales",
            autor: "Soda Stereo"
        },
        {
            cita: " Hotel California",
            autor: "Eagles"
        },
        {
            cita: " Fake Plastic Trees",
            autor: "Radiohead"
        },
        {
            cita: " Antes",
            autor: "Jorge Drexler"
        },
        {
            cita: " New York State of Mind",
            autor: "Billy Joel"
        },
        {
            cita: " Black",
            autor: "Pearl Jam"
        },

    ]
    const btn = document.getElementById("generate-btn")
    btn.addEventListener("click", function (){
        let random = Math.floor(Math.random() * quotes.length)
        console.log(random)
        document.getElementById("quote").textContent = quotes[random].cita
        document.querySelector(".author").textContent = quotes[random].autor

    })
})()


