
        //1 es piedra, 2 es papel, 3 es Tijera
        //FUNCIONES
        function aleatorio(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function eleccion(jugada){
            let resultado = "";
            if(jugada == 1){
                resultado = "Piedra";
            }else if (jugada == 2){
                resultado = "Papel";
            }else if (jugada == 3){
                resultado = "Tijera";
            }else{
                resultado = "No elegiste nada, Boludo!"
            }
            return resultado;
        }



        let jugador = 0;
        let pc = 0
        let triunfos = 0;
        let perdidas = 0;
        let empates = 0;
        
        while (triunfos < 3 && perdidas < 3 && empates <3){

            pc = aleatorio(1, 3);
            jugador = prompt("Elije 1 = Piedra, 2 = papel, 3 = tijera");

            // alert("Elegiste " + jugador);
            alert("Tu eliges: " + eleccion(jugador))  
            alert("PC elige: " + eleccion(pc))
            
            //COMBATE

            if(pc == jugador){
                alert("EMPATE")
                empates = empates + 1;

            }else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
                alert("GANASTE")
                triunfos = triunfos + 1;
        
            }else{
                alert("PERDISTE, GANO EL PC")
                perdidas = perdidas + 1;

            }

        }

        alert("Ganaste " + triunfos + " veces, perdiste " + perdidas + " veces y empataste " + empates + " veces.")

        



       

