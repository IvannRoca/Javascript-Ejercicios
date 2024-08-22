

//--------------1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array.
//Mostrar en consola el resultado del array.

var numerosAlAzar = [];
for(var i = 0; i < 10; i++){
    var randomNumber = Math.floor(Math.random() * 100);
    numerosAlAzar.push(randomNumber); 
}

console.log('Arreglo de numeros aleatorios', numerosAlAzar);





//--------------2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir
// en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

var userString = prompt('Ingresa varias palabras separadas por coma.');
var userArray = userString.split(','); //Split en javascript divide un objeto de tipo stringen array (vector) de cadenas mediante la separacion de cadenas en subcadenas.
console.log('Array comvertido', userArray);





//-------------3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor
// y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

var numbersArray = [10, 40, 30, 20, 15, 5];

numbersArray.sort((a, b) => a - b); //sort en javascript ordena los elemento sde un arreglo (array) localmente y devuelve el arreglo ordenado.

console.log('Array ordenado de menor a mayor:', numbersArray);

var minNumber = numbersArray[0];
var maxNumber = numbersArray[numbersArray.length - 1]; //En javascript la propiedad de lenght es una propiedad de objetos que devuelve la cantidad de caracteres o elementos de ese objeto.

console.log('Numero menor:', minNumber);
console.log('Numero mayor:', maxNumber);