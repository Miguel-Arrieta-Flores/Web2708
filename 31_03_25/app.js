let inventario=[];

//Funcion para menu
function mostrarMenu() {
    return parseInt(prompt(
        "Opciones disponibles \n"+
        "1. Agregar producto \n" +
        "2. Mostrar productos \n" +
        "3. Buscar producto \n" +
        "4. Salir \n"+
        "Elije una opcion:"
    ));
}

function agregarProducto() {
    let nombre=prompt("Introduce el nombre del producto: ");
    let cantidad=parseInt(prompt("Introduce la cantidad el producto: "));
    let precio=parseInt(prompt("Introduce el precio del producto: "));

    if (cantidad>0 && precio>0) {     
        let producto={
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };

        inventario.push(producto);
        alert("Producto agregado");
    }
    else{
        alert("La cantidad y precio debe ser numeros positivos");
    }
}

function mostrarProductos() {
    if (inventario.length === 0) {
        alert("No hay productos")
    } else {
        let mensaje="Productos en inventario \n";
        for (let i = 0; i < inventario.length; i++) {
            mensaje+=`Producto: ${i+1} \n`+
                    `Nombre: ${inventario[i].nombre} \n`+
                    `Cantidad: ${inventario[i].cantidad} \n`+
                    `Precio: ${inventario[i].precio} \n` +
                    "------------------------------------\n";
        }
        alert(mensaje);
    }
}

function buscarProductos(){
    let encontrado=false;
    while (!encontrado) {       
        let opcion=parseInt(prompt(
            "Opciones disponibles \n"+
            "1. Por nombre del producto \n"+
            "2. Por numero del producto \n"+
            "Elije una opcion:"
        ));
        switch (opcion) {
            case 1:        
                let nombre=prompt("Ingrese el nombre del producto: ");
                for (let i = 0; i  < inventario.length; i++) {
                    if (inventario[i].nombre.toLowerCase()==nombre.toLowerCase()) {
                        alert(`Producto: ${i+1} \n`+
                                `Nombre: ${inventario[i].nombre} \n`+
                                `Cantidad: ${inventario[i].cantidad} \n`+
                                `Precio: ${inventario[i].precio} \n` +
                                "------------------------------------\n");
                        encontrado=true;
                    }
                } 
                if (!encontrado) {
                    alert("Nombre invalido. Intentalo de nuevo")
                }  
                break;
            case 2:
                let num=parseInt(prompt("Ingrese el numero del producto: "))
                if (num>0 && num<=inventario.length) {    
                    alert(`Producto: ${num} \n`+
                        `Nombre: ${inventario[num-1].nombre} \n`+
                        `Cantidad: ${inventario[num-1].cantidad} \n`+
                        `Precio: ${inventario[num-1].precio} \n` +
                        "------------------------------------\n");
                    encontrado=true;
                } else {
                    alert("Numero invalido. Intenta de nuevo")
                }
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo")
                break;
        }
    }        
}

function iniciarPrograma(){
    let continuar=true;
    while (continuar) {
        let opcion=mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProductos();
                break;
            case 4:
                alert("Saliendo del programa...")
                continuar=false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo")
                break;
        }
    }
    alert("Programa finalizado");
}

iniciarPrograma();
