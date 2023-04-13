/*ejercicio 1*/

function numeros(numero) {
  numero % 2 === 0
    ? console.log(`${numero} es un numero par`)
    : console.log(`${numero} es un numero impar`);
}

let numeroIngresado = prompt("ingresa un numero:");
numeros(numeroIngresado);

/*ejercicio 2*/
function ejercicioDos(a, b) {
  if (a > b) {
    console.log(`${a} es mayor`);
  } else if (a < b) {
    console.log(`${b} es mayor`);
  } else if (a === b) {
    console.log(`son numeros iguales`);
  }
}
/*ejercicio 3*/
function multiplo(valor) {
  valor % 5 === 0
    ? console.log(`${valor} es multiplo de 5`)
    : console.log(`${valor} no es multiplo de 5`);
}

multiplo(34);

/*ejercicio 4*/
function ejercicioTres(parametro) {
  for (let i = 0; i <= parametro; i++) {
    console.log(i);
  }
}
ejercicioTres(5);

/*ejercicio 5*/
function ejercicioCinco(palabra, value) {
  for (let i = 0; i < value; i++) {
    console.log(palabra);
  }
}

ejercicioCinco("dani", 7);

/*ejercicio 6*/
function ejercicioSeis(array) {
  console.log(array);
}

ejercicioSeis([1, 2, 3, 4, 5, 6, 7]);

/*ejercicio 7*/
function ejercicioSiete(arrayNuevo) {
  for (let i = 0; i < arrayNuevo.length; i++) {
    if (i === 5) {
      continue;
    }
    console.log(arrayNuevo[i]);
  }
}

ejercicioSiete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/*ejercicio 8*/
function ejercicioOcho(ultimoArray, ultimoParametro) {
  for (let i = 0; i < ultimoArray.length; i++) {
    console.log(ultimoArray[i] * ultimoParametro);
  }
}

ejercicioOcho([2, 4, 6, 8, 10, 12, 14], 8);
