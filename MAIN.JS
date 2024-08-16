// PUNTO 1
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' es par.');
    } else {
        console.log(numero + ' es impar.');
    }
}
// PUNTO 2 
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' es mayor que ' + num2 + '.');
    } else if (num1 < num2) {
        console.log(num2 + ' es mayor que ' + num1 + '.');
    } else {
        console.log(num1 + ' y ' + num2 + ' son iguales.');
    }
}
// PUNTO 3
function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
        console.log(numero + ' es múltiplo de 5.');
    } else {
        console.log(numero + ' no es múltiplo de 5.');
    }
}
// PUNTO 4
function imprimirNumerosHasta(numero) {
    for (var i = 0; i <= numero; i++) {
        console.log(i);
    }
}
// PUNTO 5
function imprimirPalabra(palabra, cantidad) {
    for (var i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}
// PUNTO 6
function imprimirArray(array) {
    array.forEach(function(valor) {
        console.log(valor);
    });
}
// PUNTO 7 
function imprimirArraySinQuinto(array) {
    if (array.length >= 10) {
        array.forEach(function(valor, indice) {
            if (indice !== 4) { // El índice 4 corresponde a la 5ta posición (0-based)
                console.log(valor);
            }
        });
    } else {
        console.log('El array debe tener al menos 10 elementos.');
    }
}
// PUNTO 8
function multiplicarArrayPorNumero(array, numero) {
    array.forEach(function(valor) {
        console.log(valor * numero);
    });
}

