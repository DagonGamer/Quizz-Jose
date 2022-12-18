let Puntos = 0, Pregunta = 0;

setInterval(() => {
    document.querySelector("div.Marcador p").innerText = Puntos + " / 10 p";
}, 100);

for ( let div of document.querySelectorAll("div.Respuestas div") ) {

    div.addEventListener("click", e => {

        if ( div.className != "Pase" ) {

            if ( div.className == "Correcta" ) {

                Puntos++;
                div.style.background = "#dfd";
    
            } else {
    
                div.style.background = "#fdd";
                
                if ( div.parentNode.querySelector("div.Correcta") )
                    div.parentNode.querySelector("div.Correcta").style.background = "#dfd";
    
            }

        }

        Pregunta++;

        document.querySelector("body").style.top = ( Pregunta * -100 ) + "vh";

    });

}