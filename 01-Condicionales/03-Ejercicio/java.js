//--------------3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var numero = parseInt(prompt('Introduce un numero'));
if(numero % 2 === 0){
    alert('El numero ' + numero + ' es par');
}else {
    alert('El numero ' + numero + ' no es par')
}