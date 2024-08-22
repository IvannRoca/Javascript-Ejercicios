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


//--------------5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado 
//para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo 
//mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.


var diaDeLaSemana;

while (true){
    diaDeLaSemana = prompt('Ingresa un dia de la semana.').toLowerCase();

    if(diaDeLaSemana === 'domingo'){
        alert('Ve a descansar!');
        break;
    }else if(diaDeLaSemana === 'lunes'){
        alert('El lunes ni las gallinas ponen');
    }else if(diaDeLaSemana === 'martes'){
        alert('Ombligo de semana');
    }else if(diaDeLaSemana === 'miercoles'){
        alert('Aun Ombligo de semana 😔');
    }else if(diaDeLaSemana === 'jueves'){
        alert('Ya casi lo logras!');
    }else if(diaDeLaSemana === 'viernes'){
        alert('Hello weekend!!');
    }else if(diaDeLaSemana === 'sabado'){
        alert('Tiempo para relajarse')
    }else{
        alert('Ese dia no existe');
    }
}