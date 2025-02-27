/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let primerElemento = 0;
   return primerElemento = array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoElemento = 0;
   return ultimoElemento = array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map((num => { return num + 1;}));
   return masUno;
}
     

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  let frase = palabras.join(' ');
  return frase;
       
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   incluyebool = array.includes(elemento);
   return incluyebool;

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
      for (var i=0,acumula_suma=0; i < arrayOfNums.length ; i++ ) {
      acumula_suma += arrayOfNums[i];
   } 
   return acumula_suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let total = 0;
    for (let i=0 ; i < resultadosTest.length ; i++ ) {
      total += resultadosTest[i];
      } 
      let promedio = total / resultadosTest.length; 
      return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   bigBrother = arrayOfNums[0];
   for (let i=1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > bigBrother) {
         bigBrother = arrayOfNums[i];
      }
   } return bigBrother;
      
   }

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1){
      return arguments[0];
   } else {
      var multiplicados=1;
      for (let i=0; i < arguments.length; i++){
         multiplicados = multiplicados * arguments[i];
      }
      return multiplicados;
   }
}
   
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cantMayores18 =0;
   array.forEach(num => {
      if (num > 18) {
       cantMayores18++; }
      });
   return cantMayores18;
   }
   
   


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
var findesemana ="Es fin de semana";
var dialaboral="Es dia laboral"; 
   if ((numeroDeDia == 1) || (numeroDeDia == 7)){
   return findesemana; } else 
   return dialaboral;
   }

   

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numero="";
   numero = num.toString();
   numero.split('');
   if (numero[0]==='9'){
      return true;} else return false;
   }



function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var sonIguales = array.every((num) => { return (num === array[0]);});
   return sonIguales;
}
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arraypedido=[];
   for (i=0; i<array.length; i++){
      if ((array[i] === 'Enero') || (array[i] === 'Marzo') || (array[i] === 'Noviembre')){
         arraypedido.push(array[i]);} else continue;
      }
   
   boolincluye = arraypedido.includes('Enero','Marzo','Noviembre');
   frasenoseencontraron="No se encontraron los meses pedidos";
   if (boolincluye == true){
      return arraypedido;} else return frasenoseencontraron;
}
   

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array = [];
   let multiplicacion = 0;
   for (let i=0; i<11; i++){
      
      multiplicacion = 6 * i;
      
      array.push(multiplicacion);
      
   } return array;

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   array2 = [];
   for (i=0; i<=array.length; i++) {
      if( array[i] > 100){
       array2.push(array[i]);
      }
   } return array2;
  }

   
   

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let arreglo = [];
   let iteraciones=0;
   
   for (let i=0; i < 10; i++){
      num += 2;
      arreglo.push(num);
      iteraciones++;
      if (num === iteraciones){
      console.log("Se interrumpio la ejecución");
      break;
      }
      return arreglo;
   }
}



function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
