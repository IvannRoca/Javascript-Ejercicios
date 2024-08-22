//-----------------3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo.
// Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

var numbers = [];
var userNumber;

while (true){
    userNumber = parseInt(prompt('Ingresa numeros varias veces. Ingresa el 0 cuando termines:'));
    if (userNumber === 0)
        break;
    numbers.push(userNumber);
}

console.log('Numero capturados', numbers);