//-------------5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

var numero1 = parseFloat(prompt('Ingresa un numero'));
var numero2 = parseFloat(prompt('Ingresa otro numero'));

if(numero1 < numero2){
    alert('El numero menor es ' + numero1);
}else if (numero1 > numero2){
    alert('El numero menor es ' + numero2);
}
