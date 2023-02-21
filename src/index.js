// Aquí se programará
import cipher from './cipher.js';

console.log(cipher);
//Aquí le pedimos al usuario que ingrese su nombre y lo guardamos 
//en una variable
// let nombreUser = prompt("¿Cúal es tu nombre?");
// //Poner el nombre ingresado en Mayúsculas para que resalte
// let nombreMayuscula = nombreUser.toUpperCase();
// //Accedemos al DOM y jalamos por ID la etiqueta span y 
// //su contenido vacio lo reemplamos por el contenido de 
// document.getElementById('nombreUsuario').textContent = nombreMayuscula;

const seccion0 = document.getElementById('section0');
const seccion1 = document.getElementById('section1');

const botonInicio = document.getElementById('btnEmpezar');
botonInicio.addEventListener('click', muestraSeccionOne);

function muestraSeccionOne(){
    seccion0.style.display = "none";
    seccion1.style.display = "block";  
}
// ************************************************


// posiciones.addEventListener('change', () => {
//     console.log(posiciones.value);
// })
// let positions = posiciones.value;
// console.log("Nueva variable de offset", positions);
// let posiciones = document.getElementById('positions');
// let texTarea1 = document.getElementById('aCifrar');

let boton = document.getElementById('btnCodificar');
    boton.addEventListener("click", capturarTextTarea1Yposiciones);
    // boton.addEventListener("click", cipher.encode(posiciones, texTarea1));
    
    
  
function capturarTextTarea1Yposiciones(){
 let texTarea1 = document.getElementById('aCifrar').value;
 let posiciones = document.getElementById('positions').value;

//  let boton = document.getElementById('btnCodificar');
//  boton.addEventListener('click', cipher.encode(posiciones, texTarea1));

 let msjCifrado = document.getElementById('msjCifrado');
 
 msjCifrado = cipher.encode(posiciones, texTarea1);

 let nuevoMensajeCifrado = document.getElementById('aquiVa');
 nuevoMensajeCifrado.textContent= msjCifrado;


//  msjCifrado.textContent= msjCifrado;

//  console.log(posiciones);
//  console.log(texTarea1);
//  console.log(msjCifrado);
//  console.log(nuevoMensajeCifrado );
}

// boton.addEventListener('click', function());

let botonDecodificar = document.getElementById('btnDecodificar');
 botonDecodificar.addEventListener('click', decodificarMensaje);

function decodificarMensaje(){
let texTarea2 = document.getElementById('aCifrar1').value;
let posiciones = document.getElementById('positions').value;

let msjDecifrado = document.getElementById('msjDecifrado');
msjDecifrado = cipher.decode(- posiciones, texTarea2);

let nuevoMensajeDecifrado = document.getElementById('aquiVaDecifrado');
nuevoMensajeDecifrado.textContent = msjDecifrado;

 }

// document.getElementById('msjDecifrado').textContent = mensajeDecifrado;
