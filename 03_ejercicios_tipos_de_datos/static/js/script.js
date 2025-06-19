console.log("Conexion correcta...");

// Declaración de variables
let Edad= 30;
let ValorEuler = 2.71828; //(3.14)Numérico con parte decimal
let malChiste = "Una sandia fantasma";    //<<<String  // (=):Asignacion de valor
let valorBooleano = true;//Valor verdadero o falso( 0,1 )
let arregloNumeros = [1, 2, 3, 4]; //<<Array-Lista de numeros
let objetoPersona = { nombre: "RochyRD", edad: 99 };//Object - Diccionario
let valorIndefinido;//Sin valor asignado
let valorNulo = null;//Valor nulo - null
const mes = "Junio";//Constante - No varia



// Funciones para mostrar cada valor con alert()

function mostrarEdad() {
  alert("Edad del estudiante: " + Edad);
}

function mostrarValorEuler() {
  alert("Valor: " + ValorEuler);
}

function mostrarMalChiste() {
  alert("Tremendo chiste crack: " + malChiste);
}

function mostrarBooleano() {
  alert("Es un valor aleatorio: " + valorBooleano);
}

function mostrarArreglao() {
  alert("Los numeros tan arreglaos: " + arregloNumeros);
}

function mostrarFlow() {
  alert("Tremenda pinta: " + JSON.stringify(objetoPersona));
}

function mostrarUndefaine() {
  alert("No se que es esto...: " + valorIndefinido);
}

function mostrarAAAA() {
  alert("nuloaaaaaaaaaaaaaaaaaaaaaaaaaa: " + valorNulo);
}

function mostrarMej() {
  alert("Hoy estamos en: " + mes);
}