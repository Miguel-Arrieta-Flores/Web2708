//Compara dos numeros

let dato1=parseInt(prompt("Ingrese el primer numero: "));
let dato2=parseInt(prompt("Ingrese el segundo numero: "));

if(dato1>dato2){
    console.log("El primer numero es mayor");
    alert("El primer numero es mayor");
}else if(dato1==dato2) {
    console.log("Son iguales");
    alert("Son iguales");
}else{
    console.log("El segundo numero es mayor");
    alert("El segundo numero es mayor");
}
