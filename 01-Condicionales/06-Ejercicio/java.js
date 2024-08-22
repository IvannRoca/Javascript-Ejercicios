//-------------6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que dos números sean iguales.

var numero1 = parseFloat(prompt('Ingresa el primer numero'));
var numero2 = parseFloat(prompt('Ingresa el segundo numero'));
var numero3 = parseFloat(prompt('Ingresa el tercer numero'));

if(numero1 >= numero2 && numero1 >= numero3){
    alert('El numero mayor es ' + numero1);
}else if (numero2 >= numero1 && numero2 >= numero3){
    alert('El numero mayor es ' + numero2);
}else{
    alert('El numero mayor es ' + numero3);
}