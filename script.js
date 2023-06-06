function calcularPrecioFinal() {
    let cantEnt = document.getElementById("cantEntradas").value; // Almacena la cantidad de entradas ingresadas por el usuario
    let desc = document.getElementById("porcDescuento").value; // Almacena el tipo de usuario y el descuento que elijio el usuario.

    let descTotal = (cantEnt * 1000 ) * desc/100; // Obtengo el descuento

    let precioFin = (cantEnt * 1000) - descTotal // Resto el descuento del precio total

    let botonResumen = document.getElementById("boton-resumen");
    botonResumen.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById("precioFinal").innerHTML = `Total a pagar: $ ${precioFin}` // Coloco en el html el valor de las entradas con el descuento
    })
    
    
}   

calcularPrecioFinal()
