//Aquí se implementará el objeto cipher y debe contener dos métodos:

const cipher = {
  //metodo 1 => offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.

  encode: function (offset, string) {
    let nuevaPalabra = "";
    const stringMayuscula = string.toUpperCase();
    offset = offset % 26;

    for (let i = 0; i < stringMayuscula.length; i++) {
      //charCodeAt(i) => obtengo los ascci de mi string y aplicando la formula + la nueva posición obtengo el nuevo ascci
      let ascciString = stringMayuscula.charCodeAt(i);

      if (ascciString >= 65 && ascciString <= 90) {
        ascciString = ascciString + offset;

        if (ascciString > 90) {
          ascciString = ascciString - 26;
        } else if (ascciString < 65) {
          ascciString = ascciString + 26;
        }
      }
      nuevaPalabra = nuevaPalabra + String.fromCharCode(ascciString);
    }
    return nuevaPalabra;
  },

  //método2 => offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.

  decode: function (offset, string) {
    let nuevaPalabra = "";
    const stringMayuscula = string.toUpperCase();

    for (let i = 0; i < stringMayuscula.length; i++) {
      let ascciString = stringMayuscula.charCodeAt(i);

      if (ascciString > 65 && ascciString <= 90) {
        ascciString = ((ascciString - offset + 65) % 26) + 65;
      } else if (ascciString === 65 && ascciString <= 71) {
        ascciString = ((ascciString - offset + 65) % 26) + 65;
      }
      nuevaPalabra = nuevaPalabra.concat(String.fromCharCode(ascciString));
    }
    return nuevaPalabra;
  },
};
export default cipher;
