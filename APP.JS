var nombredelusuario = "Mocalechande";
var apellido = "Mendez";
nombredelusuario = "Alex";
console.log(nombredelusuario, apellido);



// OPERADORES son operaciones matematicas o comparaciones.
var numero1 = 150;
var numero2 = 230;
var resultado = numero1 * numero2;
console.log (resultado);


var apellido = "Mendez";
var nombredelusuario = "Alex";

// cuando unimos 2 string se llama concanetación. 
var nombreCompleto = nombredelusuario + " " + apellido;
console.log(nombreCompleto);

// Ejemplo de operador de comparación.
let numeroUno = 700;
let numeroDos = 500;
let resultado1 = numeroUno >= numeroDos;
console.log(resultado1);

var Contraseña = "pene lindo"
var entrada = "cuca culeada"
// Un ejemplo de una operación de comparación: Resultado loguearse ¿La clave ingresada "entrada" es igual a la contraseña?
var resultadoLogearse = entrada == Contraseña;
console.log(resultadoLogearse); 



// CONDICIONALES if significado SI (se da la condición hagame esto) else Significado CASO CONTRARIO hagame esto y entre llaves {} damos la orden de lo que queremos que pase. 

var contraseñaDB = "mivergaparada"
var input = "mivergaparada"
var resultadoLogin = input == contraseñaDB;
if (resultadoLogin == true) {
    console.log("Login Correcto");
} else {
console.log("Contraseña Incorrecta Bruto");
}
console.log(resultadoLogin);

var Puntuación = 70;
if (Puntuación > 30) {
    console.log("Estas Mejorando");
} 
else if (Puntuación > 15){
        console.log('Necesita Practicar Más');
    }
else {
    console.log("Estudia la GUIA");
}
// El condicionante switch se acompaña de Case (caso que sea X muestreme es x) y cierra con break. En caso de no darse la condición de case entonces mostrarse por Default No es la condición X.
var TipoTarjeta = "Tarjeta Debito"
switch (TipoTarjeta) {
    case "Tarjeta Debito":
    console.log("Es una Tarjeta Debito");
    break;
    case "Tarjeta de Credito":
    console.log ("Es una Tarjeta de Credito");
    break;
default:
console.log ('No Tarjeta');
}

//ITERADORES BUCLES
var contar = 99;
while (contar > 0){
    console.log("Hola Mundo");
    contar = contar - 1;
}
// Si cuenta es menor o igual a 50 entonces mostrar cuentas hasta el valor de cuenta indicada ya que al pasar del valor indicado deja de ser verdadera la afirmación y se detiene el proceso impidiendo el bucle.
let cuenta = 1;
while(cuenta <= 50) {
    console.log (cuenta);
    cuenta++;
}
// con ++ se muestra la información en orden ascendente y con -- se muestra la información en orden descendente.


var nombres = ["Oscar", "Jaime", "Carmen", "Kevin"];
console.log (nombres[0])
for (var indice = 0;indice <nombres.length; indice++){
    console.log (nombres[indice]);

}
for (var indice = nombres.length -1; indice >= 0; indice--) {
    console.log(nombres[indice]);
    
}

// FUNCIONES definir una tarea y llamar esa tarea a través de un nombre. Y de esta manera reutilizar el código.

function saludar(nombreDeUsuario, apellidoDeUsuario){
    
    console.log ("Hola " + nombreDeUsuario + apellidoDeUsuario);
}

saludar("Alexis ", "Mendez" );
saludar("Cheryl ", "Mendez");
saludar("Michelle ", "Mendez");
