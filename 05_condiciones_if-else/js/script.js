console.log("Conexión con js establecida...")
// ejercicio 1
function edadVotar(){
    let edad= parseInt(prompt("Ingrese su edad: "));

 if (edad >= 18){
    alert("Su edad " + edad + " aprovada para votar.");

 } else if (edad >= 0 && edad < 18){
    alert("Su edad " + edad + " no esta aprovada para votar.");

 } else {
    alert("Ingrese un valor valido");
 }
};
//ejercicio 2
function contraseña(){
   let pass = parseInt(prompt("Ingrese la contraseña"));
   if (pass == 1234){
    alert("La contraseña es correcta");
   } else if (pass /= 1234){
    alert("La contraseña es incorrecta");
   } else {

   }
};
//ejercicio 3
function Verificar(){
    let numero = parseInt(prompt("Ingrese el numero"));
    if (numero % 2 == 0){
        alert("El numero es par");
    } else {
        alert("impar");
    }
};
//ejercicio 4
function Temperatura(){
    let temperatura = parseInt(prompt("Ingresar la temperatura"));
    if ( temperatura >= 30 && temperatura < 50){
        alert("Hace calor");
    } else if ( temperatura >= 15 && temperatura < 30){
        alert("Tempertura agradable");
    } else if ( temperatura >= -5 && temperatura <= 15){
        alert("Hace frio");
    } else {
        
    }
};
//ejercicio 5
function Comparar(){
    let a = parseInt(prompt("Ingresa primer numero"));
    let b = parseInt(prompt("Ingresar segundo numero"));
    if (a == b){
        alert( a + " es igual a " + b );
    } else if ( a > b ){
        alert(a + " es mayor a " + b);
    } else {
        alert(b + " es mayor a " + a);
    }
};
//ejercicio 6
function Notas(){
    let Nota = parseInt(prompt("Ingresar Nota"));
    if(Nota >= 4){
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
};
//ejercicio 7
function Usuarios(){
    let Usuario = prompt("Ingrese palabra");
    let usu = "admin";
    if (Usuario == usu){
        alert("Ahora eres Admin");
    } else {
        alert("A tu casa pete");
    }
};
//ejercicio 8
function Letras(){
    let letra = prompt("Ingrese palabra");
    let letraA = "A"
    if (letra[0] == letraA){
        alert("Palabra con A");
    } else {
        alert("Tu palabra no empieza con mayuscula")
    }
};
//ejercicio 9
function Descuento(){
    let producto = parseInt(prompt("Ingrese precio"));
    if (producto >= 10000){
        alert("Obtienes tu descuento")
    } else if (producto <= 9999){
        alert("No tienes descuento")
    }
};
//ejercicio 10
function Permiso(){
    let respuesta = "si";
    let edad = parseInt(prompt("Ingresar edad"))
    let licencia = prompt("¿Tienes Licencia?")
    if (edad >= 18 && licencia == respuesta){
        alert("Puedes conducir")
    } else {
        alert("No puedes conducir")
    }
};
//ejercicio 11
function Palabra(){
    let pal1 = prompt("Ingresar primera palabra");
    let pal2 = prompt("Ingresar segunda palabra");
    if(pal1 == "" && pal2 ==""){
        alert("ingrese un valor para chambear...")
    }else if(pal1.length < pal2.length){
        alert(`la palabra mas larga es ${pal2} con ${pal2.length} caracteres`)
    }else if(pal1.length == pal2.length){
        aler
    }
};
//ejercicio 12
function Correo(){
    let correo = prompt("Ingrese su correo");
    let gmail = "@"
    if (correo[0] == gmail){
        alert("que buen correo master");
    } else {
        alert("anda a hacerte un buen correo")
    }
};