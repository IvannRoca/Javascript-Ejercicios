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