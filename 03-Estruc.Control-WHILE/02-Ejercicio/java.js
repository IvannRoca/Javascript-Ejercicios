//--------------2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números
// del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

var number1 = parseInt(prompt('Ingresa un numero entre 1 y 50:'));
var number2 = parseInt(prompt('Ingresa un numero entre 1 y 50:'));
var x = 1;

while(x <= 50){
    if(x === number1 || x === number2){
        console.log(x + ' !Loteria¡');
    }else{
        console.log(x);
    }
    x++;
} 