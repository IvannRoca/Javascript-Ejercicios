//---------------4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar
// el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

var palabras = '';
var palabraIngresada;

while (true){
    palabraIngresada = prompt('Ingresa letras y palabras y da clik en OK. Para finalizar, no ingreses nada y da clik en OK.');
    if(palabraIngresada === '')
        break;
    palabras += palabraIngresada + ' ';
}

console.log('Palabras concatenadas:', palabras.trim()); //El trim() en javascript elimina elimina espacios en blanco en ambos extremos del string (espacio, tabulacion, etc..) y todos los caracteres de nuevas lineas. 
