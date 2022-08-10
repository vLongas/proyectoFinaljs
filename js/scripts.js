// const { default: Swal } = require("sweetalert2");







//Parte 1 de entrega del proyecto
const producto1 = { id: 1, producto: 'Remera manga corta', precio: 4550, edicion: 'Verano' };
const producto2 = { id: 2, producto: 'Buzo frizado', precio: 10700, edicion: 'Invierno' };
const producto3 = { id: 3, producto: 'Pantalon cargo', precio: 13000, edicion: 'Invierno' };
const producto4 = { id: 4, producto: 'Bermuda de jean', precio: 6070, edicion: 'Verano' };
const producto5 = { id: 5, producto: 'Gorro de lana', precio: 2500, edicion: 'Invierno' };


// const ropaVerano = arrayProductos.filter((el) => el.edicion.includes('Verano'));
// const ropaInvierno = arrayProductos.filter((el) => el.edicion.includes('Invierno'));

// console.log(ropaInvierno);
// console.log(ropaVerano);

// let totalCompra = prompt('Ingrese un valor:'); //codeado solo para ver si funciona

// Descuento(totalCompra);

// function Descuento(totalCompra) {
//     if (totalCompra >= 20000) {
//         totalDesc = totalCompra - (totalCompra * 0.2);
//         Swal.fire('Tu compra supero el monto de 20000 pesos, tenes un 20% de descuento, precio final de: ' + totalDesc);
//     } else {
//         totalDescu = totalCompra - (totalCompra * 0.1);
//         Swal.fire('Tu compra no supero el monto de 20000 pesos, tenes un 10% de descuento, precio final de: ' + totalDescu);
//     }
// }

//Parte dos de entrega del proyecto

let escoja = prompt("Escoja un producto del 1 al 6:");

GuardarProducto(escoja, producto1, producto2, producto3, producto4, producto5);

function GuardarProducto(escoja, producto1, producto2, producto3, producto4, producto5) {
    if (escoja == 1) {
        const convertir = JSON.stringify(producto1);
        localStorage.setItem("Remera manga corta", convertir);
        Swal.fire("Tu remera esta reservada!!!");
    } else if (escoja == 2) {
        const convertir = JSON.stringify(producto2);
        localStorage.setItem("Buzo frizado ", convertir);
        Swal.fire("Tu buzo esta reservado!!!");
    } else if (escoja == 3) {
        const convertir = JSON.stringify(producto3);
        localStorage.setItem("Pantalon cargo", convertir);
        Swal.fire("Tu pantalon esta reservado!!!");
    } else if (escoja == 4) {
        const convertir = JSON.stringify(producto4);
        localStorage.setItem("Bermuda de jean", convertir);
        Swal.fire("Tu bermuda esta reservada!!!");
    } else if (escoja == 5) {
        const convertir = JSON.stringify(producto5);
        localStorage.setItem("Gorro de lana", convertir);
        Swal.fire("Tu gorro esta reservado!!!");
    }
}

let compra = document.getElementById("AnadirCompra");

compra = addEventListener('click', CompraGuardada);

function CompraGuardada(e) {
    Swal.fire({
        tittle: "Excelente!!",
        text: "Tu compra fue guardada a la perfeccion",
        icon: success
    });
}
































































