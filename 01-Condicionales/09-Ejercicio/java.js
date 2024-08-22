//---------9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

var topping = prompt('Elige un topping: Oreo, KitKat o Brownie.').toLowerCase();
const precioHelado = 50;
var precioTotal = precioHelado;

switch(topping){
    case 'oreo':
        precioTotal += 10;
        break;
    case 'kitkat':
        precioTotal += 15;
        break;
    case 'brownie':
        precioTotal += 20;
        break;
    default:
        alert('No tenemos este topping, lo sentimos.');
        alert('El precio del heldo sin topping es: ' + precioHelado + ' MXN');
        break;            
} if (topping === 'oreo' || topping === 'kitkat' || topping === 'brownie'){
    alert('El precio total del helado con topping es: ' + precioTotal + ' MXN')
}