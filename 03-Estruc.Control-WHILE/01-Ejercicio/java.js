//------------1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5
// desde 1 hasta el número introducido por el usuario.

var userNumber = parseInt(prompt('Ingresa un numero'));
var i = 1;

while (i <= userNumber) {
    if(i % 5 === 0) {
        console.log(i);
    }
    i++;
}