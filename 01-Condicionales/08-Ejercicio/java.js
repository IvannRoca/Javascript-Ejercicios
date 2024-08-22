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