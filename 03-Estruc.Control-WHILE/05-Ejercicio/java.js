
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