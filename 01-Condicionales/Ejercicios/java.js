//---------------1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

var pregunta = prompt ('¿Eres bellisimo/a?').toLowerCase();
if(pregunta === 'si'){
    alert('Ciertamente');
}else if(pregunta === 'no'){
    alert('No te creo');
}else{
    alert('Respuesta no valida');
}

//---------------2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

var numero = parseInt(prompt('Introduce un numero'));
if(numero % 2 === 0){
    alert(numero + ' es divisible entre 2');
}else {
    alert(numero + ' no es divisible entre 2')
}

//--------------3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

var numero = parseInt(prompt('Introduce un numero'));
if(numero % 2 === 0){
    alert('El numero ' + numero + ' es par');
}else {
    alert('El numero ' + numero + ' no es par')
}

//--------------4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

var numero = prompt('Numero de cliente');
if(numero = 1000){
    alert('Ganaste un premio');
}else {
    alert('Lo sentimos, sigue participando')
}

//-------------5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

var numero1 = parseFloat(prompt('Ingresa un numero'));
var numero2 = parseFloat(prompt('Ingresa otro numero'));

if(numero1 < numero2){
    alert('El numero menor es ' + numero1);
}else if (numero1 > numero2){
    alert('El numero menor es ' + numero2);
}



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

//-------------7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

var dia = prompt('Ingresa un dia de la semana:').toLowerCase();

switch (dia){
    case 'lunes':
        alert('El lunes ni las gallinas ponen');
        break;
    case 'viernes':
        alert('Es viernes y el cuerpo lo sabe');
        break;
    case 'sabado':        
    case 'domingo':
        alert('Hello weekend')
        break;
    default:
        alert('Ombligo de semana');            
}

//----------8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. 
//Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

var calificacion = parseInt(prompt('Ingresa una calificacion (entre 1 y 10)'));

if(calificacion < 1 || calificacion > 10 ){
    alert('ERROR: Calificacion debe ser entre 1 y 10.');
}else if(calificacion < 6){
    alert('REPROBADO!!');
}else if(calificacion >= 6 && calificacion <=8){
    alert('Mmmm Regular');
}else if(calificacion === 9){
    alert('Bien');
}else if(calificacion === 10){
    alert('EXELENTE!!');
}

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

//---------10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
//El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
//Carrera $3999 MXN
//Master: $2999 MXN
//Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
//Beca Facebook: 20% de descuento.
//Beca Google: 15% de descuento.
//Beca Jesua: 50% de descuento.
//Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
//Course: 2 meses
//Carrera 6 meses
//Master: 12 meses

var nivel = prompt('Elige el nivel de tu preferencia: Course, Carrera, Master.').toLowerCase();
var costoMensual;
var duracion;
var beca = prompt('¿Cuentas con alguna beca?; (Facebook, Google, Jesua, Ninguna)').toLowerCase();

switch(nivel){
    case 'course':
        costoMensual = 2999;
        duracion = 2;
        break;
    case 'carrera':
        costoMensual = 3999;
        duracion = 6;
        break;
    case 'master':
        costoMensual = 4999;
        duracion = 12;
        break;
    default:
        alert('Nivel invalido.');
    break;       
} 

var descuento;
switch(beca){
    case 'facebook':
        descuento = 0.20;
        break;
    case 'google':
        descuento = 0.15;
        break;
    case 'jesua':
        descuento = 0.50;
        break;
    case 'ninguna':
        descuento = 0;
        break    
    default:
        alert('Beca inexistente. Sin descuento.');
        descuento = 0;
        break;  

} if (costoMensual !== undefined){
    var costoConDescuento = costoMensual * (1 - descuento);
    var totalAPagar = costoConDescuento * duracion;

    alert('El precio mensual con descuento es: ' + costoConDescuento + ' MXN');
    alert('El total a pagar por:' + duracion + ' meses es: ' + totalAPagar + ' MXN');
}

//---------------11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
//Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
//Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

var vehiculo = prompt('Ingresa el tipo de vehiculo: coche, moto, autobus').toLowerCase();
var kmRecorridos = parseFloat(prompt('Ingresa distancia recorrida en Km:'));
var litrosConsumidos = parseFloat(prompt('Ingresa los litros consumidos:'));

var precioPorKm;
switch(vehiculo){
    case 'coche':
        precioPorKm = 0.20;
        break;
    case 'moto':
        precioPorKm = 0.10;
        break;
    case 'autobus':
        precioPorKm = 0.50;
        break;
    default:
        alert('Vehiculo no valido');
        break;

} if (precioPorKm !== undefined) {
    var costoPorKm = precioPorKm * kmRecorridos;
    var costoAdicional;

    if (litrosConsumidos <= 100){
        costoAdicional = 5;
    }else{
        costoAdicional = 10;
    }

    var totalAPagar = costoPorKm + costoAdicional;
    alert('El total a pagar es: ' + totalAPagar + ' MXN');
}

