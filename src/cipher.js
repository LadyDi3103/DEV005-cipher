//Aquí se implementará el objeto cipher y debe contener dos métodos:

const cipher = {
  //metodo 1 => offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.

  encode : function(offset, string){
              console.log("Este es mi texto",string);
              let nuevaPalabra= "";  //VARIABLE GLOBAL 
          for (let i = 0; i < string.length; i++) {
              //charCodeAt(i) => obtengo los ascci de mi string y aplicando la formula + la nueva posición obtengo el nuevo ascci
               let numero = string.charCodeAt(i) - 65 + offset % 
               
               26 + 65;
               nuevaPalabra = nuevaPalabra.concat (String.fromCharCode(numero));

              console.log("Esta es la nueva palabra",nuevaPalabra);       
             }           
             return(nuevaPalabra);          
  },

  //método2 => offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.

  decode : function(offset, string){
    console.log("texto a decoficar", string);
    let nuevaPalabra= "";
    for (let i = 0; i < string.length; i++) {
      let numeroAscci = string.charCodeAt(i) - 65 - offset % 26 + 65;
      console.log("asciis", numeroAscci);
      nuevaPalabra = nuevaPalabra.concat (String.fromCharCode(numeroAscci-6));
      console.log("palabra decodificada", nuevaPalabra);
   }
   return(nuevaPalabra);
  }
};

export default cipher;
