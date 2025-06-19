// Declaración de variables
let numeroEntero = 2009;
let numeroDecimal = 16;//(3.14)Numérico con parte decimal
let cadenaTexto = "Sala #5";    //<<<String  // (=):Asignacion de valor
let valorBooleano = true;//Valor verdadero o falso( 0,1 )
let arregloNumeros = [1, 2, 3, 4]; //<<Array-Lista de numeros
let objetoPersona = { nombre: "Ana", edad: 30 };//Object - Diccionario
let valorIndefinido;//Sin valor asignado
let valorNulo = null;//Valor nulo - null
const mes = "Junio";//Constante - No varia

// Funciones para mostrar cada valor con alert()

function mostrarAnioNacimiento() {
  alert("Año de nacimiento: " + numeroEntero);
}

function MostrarEdad() {
  alert("Edad del estudiante: " + numeroDecimal);
}

function mostrarSalonEstudiante() {
  alert("Salon del estudiante: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
