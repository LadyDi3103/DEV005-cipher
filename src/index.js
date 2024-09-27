import cipher from "./cipher.js";

const seccion0 = document.getElementById("section0");
const seccion1 = document.getElementById("section1");
const boxEncode = document.getElementById("content__msg__encode");
const boxDecode = document.getElementById("content__msg__decode");
const botonInicio = document.getElementById("btn__Empezar");

const nombreUser = prompt("¿Cúal es tu nombre?");
const nombreMayuscula = nombreUser.toUpperCase();
document.getElementById("nombreUsuario").textContent = nombreMayuscula;

botonInicio.addEventListener("click", muestraSeccionOne);

function muestraSeccionOne() {
  seccion0.style.display = "none";
  seccion1.style.display = "block";
  // boxEncode.style.display = "block";
  boxDecode.style.display = "none";
}




/* activado y desactivado de los enlaces de cada pestaña */
const linkActive = document.getElementById("link__encode");
const linkDesactive = document.getElementById("link__decode");

linkActive.addEventListener("click", function () {
  // document.getElementById("link__encode").classList.add("link_active");
  // document.getElementById("link__decode").classList.remove("link_active");
  // document.getElementById("content__msg__encode").classList.remove("display_none");
  // document.getElementById("content__msg__encode").classList.add("display_block");
  // document.getElementById("content__msg__decode").classList.remove("display_block");
  // document.getElementById("content__msg__decode").classList.add("display_none");
  toggleLinkActive(linkActive, linkDesactive, boxEncode, boxDecode);

})

linkDesactive.addEventListener("click", function () {
  // document.getElementById("link-encode").classList.remove("link_active");
  // document.getElementById("link-decode").classList.add("link_active");
  // document.getElementById("content-msg-decode").classList.remove("display_none");
  // document.getElementById("content-msg-decode").classList.add("display_block");
  // document.getElementById("content-msg-encode").classList.remove("display_block");
  // document.getElementById("content-msg-encode").classList.add("display_none");
  toggleLinkActive(linkDesactive, linkActive, boxDecode, boxEncode);
});

function toggleLinkActive(linkToAdd, linkToRemove, boxToShow, boxToHide) {
  linkToAdd.classList.add("link_active");
  linkToRemove.classList.remove("link_active");
  boxToShow.classList.remove("display_none");
  boxToShow.classList.add("display_block");
  boxToHide.classList.remove("display_block");
  boxToHide.classList.add("display_none");
}

const boton = document.getElementById("btnCodificar");
boton.addEventListener("click", codificarMensaje);

function codificarMensaje() {
  const texTarea1 = document.getElementById("aCifrar").value;
  const posiciones = document.getElementById("positions").value;

  const msjCifrado = cipher.encode(posiciones, texTarea1);
  document.getElementById("aquiVa").textContent = msjCifrado;
}

function decodificarMensaje() {
  const texTarea2 = document.getElementById("aCifrar1").value;
  const posiciones = document.getElementById("positions").value;

  const msjDecifrado = cipher.decode(posiciones, texTarea2);
  document.getElementById("aquiVaDecifrado").textContent = msjDecifrado;
}

const botonDecodificar = document.getElementById("btnDecodificar");
botonDecodificar.addEventListener("click", decodificarMensaje);

// **********

/*rescatando el valor del texto a codificar */

// const btnTextEncode = document.getElementById("btn__encode");
// btnTextEncode.addEventListener("click", function () {
//   const textEncode = document.getElementById("box__msg__encode").value;
//   // textEncode = textEncode.toUpperCase();
//   const number_offset = document.getElementById("n_offset_e").value;
//   document.getElementById("msg__encode__check").innerHTML = window.cipher.encode(textEncode, number_offset);
// });

/*rescatando el valor del texto a decodificar*/

// const btnTextDecode = document.getElementById("btn_decode");
// btnTextDecode.addEventListener("click", function () {
//   const textDecode = document.getElementById("box__msg__decode").value;
//   //textDecode = textDecode.toUpperCase();
//   const number_offset = document.getElementById("n_offset_d").value;
//   document.getElementById("msg__decode__check").innerHTML = window.cipher.decode(textDecode, number_offset);
// });
