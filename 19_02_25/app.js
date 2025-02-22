// if(condicion){
//     // Ejecuta algo is la condicion es true
// }
// // fin del programa

// if(condicion){
//     // ejecuta si la condicion es true 
// }
// else{
//     // ejecuta is la condicion es false
// }

// let palabra=prompt("Ingresa el nombre de tu escuela: ");

// if(palabra=="UNAM"){
//     console.log("Palabra correcta");
// }
// else{
//     console.log("Palabra incorrecta")
// }

// let numero=prompt("Ingresa un numero: ");

// if(numero==10){
//     console.log("Bien")
// }


// let dato=parseInt(prompt("Ingresa un numero: "));

// if(dato===10){ //Verifica dato y tipo de dato
//     console.log("Bien");
// }
// else{
//     console.log("No se puede es: "+typeof dato);
// }

// let opcionUser=promp(`
//     Elija una opcion:
//     1.- Libro
//     2.- Pelicula
//     3.- Juego
//     `);

// switch (opcionUser) {
//     case "1":
//         console.log("Principito");
//     case "2":
//         console.log("Matrix");
//     case "2":
//         console.log("AOE");
//         break;
//     default:
//         console.log("Opcion no valida");
//         break;
// }

// let numero=0;
// while(numero<=10){
//     console.log("Numero = "+numero);
//     numero++;
// }


// let x=1;
// let y=0;

// while (y<=10) {
//     console.log(x+"*"+y+"="+(x*y));
//     y++;
// }


let numeroMaquina=Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);

let numeroUser=parseInt(prompt("Adivina el numero entre 1 y 10: "));
let vidas=5;
while (numeroMaquina!==numeroUser && vidas>1) {
    vidas--;
    numeroUser=parseInt(prompt("Numero incorrecto, intentalo de nuevo, tus vidas son: "+vidas))
}

if(numeroMaquina==numeroUser){
    console.log("Ganaste");
    alert("Ganaste");
}
else{
    console.log("Perdiste");
    alert("Perdiste");
}
