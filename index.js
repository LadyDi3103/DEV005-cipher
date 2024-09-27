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
  console.log("muestraSeccionOne called");
  seccion0.style.display = "none";
  seccion1.style.display = "block";
}

// Toggle encode/decode sections
const linkEncode = document.getElementById("link__encode");
const linkDecode = document.getElementById("link__decode");

linkEncode.addEventListener("click", () => {
  console.log("Encode link clicked");
  toggleVisibility('encode');
});

linkDecode.addEventListener("click", () => {
  console.log("Decode link clicked");
  toggleVisibility('decode');
});

function toggleVisibility(action) {
  console.log(`toggleVisibility called with action: ${action}`);
  if (action === 'encode') {
    console.log("Showing encoding box");
    boxEncode.classList.remove("display_none");
    boxEncode.classList.add("display_block");
    boxDecode.classList.remove("display_block");
    boxDecode.classList.add("display_none");

    linkEncode.classList.add("link_active");
    linkDecode.classList.remove("link_active");
  } else if (action === 'decode') {
    console.log("Showing decoding box");
    boxDecode.classList.remove("display_none");
    boxDecode.classList.add("display_block");
    boxEncode.classList.remove("display_block");
    boxEncode.classList.add("display_none");

    linkDecode.classList.add("link_active");
    linkEncode.classList.remove("link_active");
  } else {
    console.log("Unknown action");
  }
}

const boton = document.getElementById("btnCodificar");
boton.addEventListener("click", codificarMensaje);

function codificarMensaje() {
  const texTarea1 = document.getElementById("aCifrar").value;
  const posiciones = document.getElementById("positions").value;

  const msjCifrado = cipher.encode(posiciones, texTarea1);
  document.getElementById("aquiVa").textContent = msjCifrado;
}

const botonDecodificar = document.getElementById("btnDecodificar");
botonDecodificar.addEventListener("click", decodificarMensaje);

function decodificarMensaje() {
  console.log("decodificarMensaje called");
  const texTarea2 = document.getElementById("aCifrar1").value;
  const posiciones = document.getElementById("positionsDecode").value;

  const msjDecifrado = cipher.decode(posiciones, texTarea2);
  console.log(`Decoded message: ${msjDecifrado}`);
  document.getElementById("aquiVaDecifrado").textContent = msjDecifrado;
}

function resetFields(section) {
  if (section === 'encode') {
    document.getElementById('aCifrar').value = ''; // Clear the encode textarea
    document.getElementById('positions').value = '1'; // Reset the encode positions input
    document.getElementById('aquiVa').textContent = ''; // Clear the encoded message output
  } else if (section === 'decode') {
    document.getElementById('aCifrar1').value = ''; // Clear the decode textarea
    document.getElementById('positionsDecode').value = '1'; // Reset the decode positions input
    document.getElementById('aquiVaDecifrado').textContent = ''; // Clear the decoded message output
  }
}

// Event listeners for reset buttons
document.getElementById('btnResetEncode').addEventListener('click', () => resetFields('encode'));
document.getElementById('btnResetDecode').addEventListener('click', () => resetFields('decode'));
