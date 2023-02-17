//Aquí se implementará el objeto cipher
//Este objeto (cipher) debe contener dos métodos:
const cipher = {
  //metodo 1

  //offset es el número de posiciones que queremos mover a la derecha en el alfabeto

  //string el mensaje (texto) que queremos cifrar.

  encode : function encode(offset, string){
        let alfabeto = "A-Z";
        string = "";
          for (let i = 0; i < string.length ; i++) {
                string.charCodeAt[i]-65 + offset % 26 + 65;
                return(String.fromCharCode[i]);
             }         
console.log(string);
  },

  //método2

  //offset es el número de posiciones que queremos mover a la izquierda en el alfabeto

  //string el mensaje (texto) que queremos descifrar.

  decode : function decode(offset, string){
    for (let i = 0; i < string.length; i++) {
      string.charCodeAt[i]-65 - offset % 26 + 65;
      return(String.fromCharCode[i]);
   }
  }
};

export default cipher;
