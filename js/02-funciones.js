//funciones
/*
alert ( "Hola" );

console.log( "Intro a JS: Funciones" );
 */

// funciones:

function nombreDeFuncion() {
  // realizar algo
  console.log("Realizar algo")
}

nombreDeFuncion();


function functionConEntrada( dato ) {
  console.log( "el dato es:", dato )
}

functionConEntrada ( 178 );

functionConEntrada ( "Texto de prueba" );

function sumarNumeros( a, b) {
  var resultado = a + b;
  console.log( "la suma de los numeros es:", resultado );
}

sumarNumeros ( 333, 444 );


/*

nota: las variables viven en un ambito (scope) existen dentro de los archivos o funciones que las detectan.

Ejemplo: la variable "resultado"
*/


function suma ( a, b ) {

  var resultado = a + b;

  return resultado; // nos regresa el resultado de la variable

}
// podemos almacenar el valor
var unaSuma = suma ( 10, 7 );

// y usarlo después cuando queramos:
console.log( "el valor de unaSuma es:" ), unaSuma );
