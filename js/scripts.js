const arrayProductos = [
    { id: 1, producto: 'Remera manga corta', precio: 4550, edicion: 'Verano' },
    { id: 2, producto: 'Buzo frizado', precio: 10700, edicion: 'Invierno' },
    { id: 3, producto: 'Pantalon cargo', precio: 13000, edicion: 'Invierno' },
    { id: 4, producto: 'Bermuda de jean', precio: 6070, edicion: 'Verano' },
    { id: 5, producto: 'Gorro de lana', precio: 2500, edicion: 'Invierno' }
];

const ropaVerano = arrayProductos.filter((el) => el.edicion.includes('Verano'));
const ropaInvierno = arrayProductos.filter((el) => el.edicion.includes('Invierno'));
    
console.log(ropaInvierno);
console.log(ropaVerano);

let totalCompra = prompt('Ingrese un valor:'); // codeado solo para ver si funciona

Descuento(totalCompra);

function Descuento(totalCompra) {
    if (totalCompra >= 20000) {
        totalDesc = totalCompra - (totalCompra * 0.2);
        alert('Tu compra supero el monto de 20000 pesos, tenes un 20% de descuento, precio final de: ' + totalDesc);
    } else {
        totalDesc = totalCompra - (totalCompra * 0.1);
        alert('Tu compra no supero el monto de 20000 pesos, tenes un 10% de descuento, precio final de: ' + totalDesc);
    }
}