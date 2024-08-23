//--------------3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos
// que son tipo número.

const array = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero'];

for (let x = 0; x < array.length; x++) {
    if (typeof array[x] === 'number') { // Si el elemento es de tipo número
        console.log(array[x]);

    }
}