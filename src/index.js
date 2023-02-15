// Aquí se programará
import cipher from './cipher.js';

console.log(cipher);

let nombreUser = prompt("¿Cúal es tu nombre?");
let nombreMayuscula = nombreUser.toUpperCase();
document.getElementById('nombreUsuario').textContent = nombreMayuscula;

const seccion0 = document.getElementById('section0');
const seccion1 = document.getElementById('section1');

const botonInicio = document.getElementById('btnEmpezar');
console.log(botonInicio);

botonInicio.addEventListener('click', muestraSeccionOne);

function muestraSeccionOne(){
    seccion0.style.display = "none";
    seccion1.style.display = "block";  
}