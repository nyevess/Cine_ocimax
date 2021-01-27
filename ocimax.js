
//Creamos la variable cliente y vacuna y con el prompt le preguntamos al usuario el nombre y si esta vacunado o no
let cliente = prompt('Introduce tu nombre: ')
let vacuna = prompt('¿Te han vacunado contra el COVID-19? (Responde si o no)').toLowerCase()

// Ahora convertimos a true si a contestado que si y a false si ha contestado que no
  if(vacuna == 'si'){
    vacuna = true
    }else if(vacuna == 'no'){
    vacuna = false
    } 

// y por último analizamos si la respuesta ha sido true, le dejamos pasar, si ha sido false le invitamos a venir otro dia
if(vacuna == true){
    console.log(`Perfecto! ${cliente}  Puedes pasar a comprar tu entrada `)
}else {
    console.log(`${cliente} lo sentimos, sin vacuna no puedes acceder al cine. Te esperamos cuando te hayas vacunado! Muchas gracias!`)
} 

/* FIN :) */
