//---------------1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
//en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

var pregunta = prompt ('¿Eres bellisimo/a?').toLowerCase();
if(pregunta === 'si'){
    alert('Ciertamente');
}else if(pregunta === 'no'){
    alert('No te creo');
}else{
    alert('Respuesta no valida');
}
