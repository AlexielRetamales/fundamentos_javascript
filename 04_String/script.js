// Uso de Strings ejemplo
let nombre = prompt ("Ingrese su nombre: "); //variable tipo texto

function usarString(){
    let primeraLetra = nombre[0]; //asignamos valor a la primera Letra con posicion 0 del nombre (A)
    let ultimaLetra = nombre[nombre.length - 1];
    alert ("Primera Letra es: " + primeraLetra + "/nÚltimaletra es: " + ultimaLetra); //mostrar resultado
}

//tarea: imprimir segunda letra y penultima del apellido
let apellido = prompt ("Ingrese su apellido: "); //variable tipo texto

function ManipularApellido(){
    let segundaLetra = apellido[1]; //asignamos valor a la primera Letra con posicion 1 del nombre (e)
    let PultimaLetra = apellido[apellido.length - 2];
    alert ("Segunda Letra es: " + segundaLetra + "/nPÚltimaletra es: " + PultimaLetra); //mostrar resultado
}