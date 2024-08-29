//Ejercicio 6 : HTML + CSS + DOM.

/* La empresa perfumes latinos premiará a su empleado del mes (quien más dinero recaude en ventas) con una comisión y requiere un programa que almacene y muestre:
Qué cantidad de cada productos vendió cada vendedor.
La suma total de dinero recolectada por cada vendedor.
Nombre del empleado del mes, en caso de haber vendido lo mismo indicar que fue un empate.
La empresa actualmente cuenta con los siguientes 4 productos que tienen los siguientes nombres y precios:
Aqua: 200 usd.
Emoción: 180 usd.
Alegría: 160 usd.
Frescura: 150 usd.
Y dos vendedores Juana y Pedro.
Notas.
Los resultados deben visualizarse en consola y deben activarse a través de botones.
El programa debe validar y mostrar un mensaje de error si no se ingresa un valor numérico.
Debe hacer uso de funciones, arrays y estructuras de control para resolver el ejercicio.
Realizar el ejercicio por medio de cualquiera de los métodos de salidas en JS (console, alert o document). */

const precios = {
    aqua: 200,
    emocion: 180,
    alegria: 160,
    frescura:150

};

//Calcular resultados
function clacularResultados() {
    //Valores de los inputs
    var ventasLaura = {
        aqua: obtenerValorNumerico('laura-aqua'),
        emocion: obtenerValorNumerico('laura-emocion'),
        alegria: obtenerValorNumerico('laura-alegria'),
        frescura: obtenerValorNumerico('laura-frescura')
    };

    var ventasAlfredo = {
        aqua: obtenerValorNumerico('alfredo-aqua'),
        emocion: obtenerValorNumerico('alfredo-emocion'),
        alegria: obtenerValorNumerico('alfredo-alegria'),
        frescura: obtenerValorNumerico('alfredo-frescura')
    };

    if (ventasLaura === null || ventasAlfredo === null) {
        console.error("Error: ingresa valores numericos validos.");
        alert("Error: ingresa valores numericos validos.");
        return;
    }

    //Totales
    var totalLaura = calcularTotal(ventasLaura);
    var totalAlfredo = calcularTotal(ventasAlfredo);

    console.log("Ventas de Laura:", ventasLaura);
    console.log("Ventas de Alfredo:", ventasAlfredo);
    console.log("Ventas de Laura:", ventasLaura);
    console.log("Ventas de Alfredo:", ventasAlfredo);

    //Empleado del mes
    if (totalLaura > totalAlfredo) {
        console.log("El empleado del mes es Laura con un total de " + totalLaura + " USD.");
        alert("El empleado del mes es Laura con un total de " + totalLaura + " USD.");
    } else if (totalAlfredo > totalLaura) {
        console.log("El empleado del mes es Alfredo con un total de " + totalAlfredo + " USD.");
        alert("El empleado del mes es Alfredo con un total de " + totalAlfredo + " USD.");
    } else {
        console.log("Es un empate con un total de " + totalLaura + " USD.");
        alert("Es un empate con un total de " + totalLaura + " USD.");
    }
}


function obtenerValorNumerico(id) {
    var valor = document.getElementById(id).value;
    var numero = parseInt(valor);
    return isNaN(numero) ? null : numero;
}

//Total de ventas

function calcularTotal(ventas) {
    return ventas.aqua * precios.aqua +
           ventas.emocion * precios.emocion +
           ventas.alegria * precios.alegria +
           ventas.frescura * precios.frescura;
    
}

function limpiarFormulario() {
    document.getElementById('laura-aqua').value = '';
    document.getElementById('laura-emocion').value = '';
    document.getElementById('laura-alegria').value = '';
    document.getElementById('laura-frescura').value = '';
    document.getElementById('alfredo-aqua').value = '';
    document.getElementById('alfredo-emocion').value = '';
    document.getElementById('alfredo-alegria').value = '';
    document.getElementById('alfredo-frescura').value = '';
}