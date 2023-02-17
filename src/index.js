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

let boton = document.getElementById('btnCodificar');
    boton.addEventListener("click", capturarTextTarea1Yposiciones);
    
  
function capturarTextTarea1Yposiciones(){
 let posiciones = document.getElementById('positions').value;
 let texTarea1 = document.getElementById('aCifrar').value;
 console.log(posiciones);
 console.log(texTarea1);
}

let msjCifrado = document.getElementById('msjCifrado');
msjCifrado.textContent = boton;
console.log(msjCifrado);



// boton.addEventListener('click', function());



// let btnCodificar = document.getElementById('btnCodificar').addEventListener("click", cipher.encode(posiciones,texTarea1)

// msjCifrado
// cipher.encode(posiciones, texTarea1);
// //.value

// );

// 


// let texTarea2 = document.getElementById('aCifrar1').value;
// let mensajeDecifrado= cipher.decode(-posiciones, texTarea2);
// document.getElementById('msjDecifrado').textContent = mensajeDecifrado;