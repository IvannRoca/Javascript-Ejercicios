//---------------11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
//Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
//Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

var vehiculo = prompt('Ingresa el tipo de vehiculo: coche, moto, autobus').toLowerCase();
var kmRecorridos = parseFloat(prompt('Ingresa distancia recorrida en Km:'));
var litrosConsumidos = parseFloat(prompt('Ingresa los litros consumidos:'));

var precioPorKm;
switch(vehiculo){
    case 'coche':
        precioPorKm = 0.20;
        break;
    case 'moto':
        precioPorKm = 0.10;
        break;
    case 'autobus':
        precioPorKm = 0.50;
        break;
    default:
        alert('Vehiculo no valido');
        break;

} if (precioPorKm !== undefined) {
    var costoPorKm = precioPorKm * kmRecorridos;
    var costoAdicional;

    if (litrosConsumidos <= 100){
        costoAdicional = 5;
    }else{
        costoAdicional = 10;
    }

    var totalAPagar = costoPorKm + costoAdicional;
    alert('El total a pagar es: ' + totalAPagar + ' MXN');
}
