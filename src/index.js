// Aquí se programará
import cipher from './cipher.js';

//Aquí le pedimos al usuario que ingrese su nombre y lo guardamos
//en una variable
const nombreUser = prompt("¿Cúal es tu nombre?");
// //Poner el nombre ingresado en Mayúsculas para que resalte
const nombreMayuscula = nombreUser.toUpperCase();
// //Accedemos al DOM y jalamos por ID la etiqueta span y
// //su contenido vacio lo reemplamos por el contenido de
document.getElementById('nombreUsuario').textContent = nombreMayuscula;

const seccion0 = document.getElementById('section0');
const seccion1 = document.getElementById('section1');

const botonInicio = document.getElementById('btnEmpezar');
botonInicio.addEventListener('click', muestraSeccionOne);

function muestraSeccionOne(){
  seccion0.style.display = "none";
  seccion1.style.display = "block";
}
// posiciones.addEventListener('change', () => {
//     console.log(posiciones.value);
// })
// let positions = posiciones.value;
// console.log("Nueva variable de offset", positions);
// let posiciones = document.getElementById('positions');
// let texTarea1 = document.getElementById('aCifrar');

const boton = document.getElementById('btnCodificar');
boton.addEventListener("click", capturarTextTarea1Yposiciones);
// boton.addEventListener("click", cipher.encode(posiciones, texTarea1));

function capturarTextTarea1Yposiciones(){
  const texTarea1 = document.getElementById('aCifrar').value;
  const posiciones = document.getElementById('positions').value;

  //  let boton = document.getElementById('btnCodificar');
  //  boton.addEventListener('click', cipher.encode(posiciones, texTarea1));
  let msjCifrado = document.getElementById('aquiVa');
  msjCifrado = cipher.encode(posiciones, texTarea1);
  const nuevoMensajeCifrado = document.getElementById('aquiVa');
  nuevoMensajeCifrado.textContent= msjCifrado;
}

// boton.addEventListener('click', function());

const botonDecodificar = document.getElementById('btnDecodificar');
botonDecodificar.addEventListener('click', decodificarMensaje);

function decodificarMensaje(){
  const texTarea2 = document.getElementById('aCifrar1').value;
  const posiciones = document.getElementById('positions').value;
  let msjDecifrado = document.getElementById('aquiVaDecifrado');
  msjDecifrado = cipher.decode(posiciones, texTarea2);
  const nuevoMensajeDecifrado = document.getElementById('aquiVaDecifrado');
  nuevoMensajeDecifrado.textContent = msjDecifrado;
}
