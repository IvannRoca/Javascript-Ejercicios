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