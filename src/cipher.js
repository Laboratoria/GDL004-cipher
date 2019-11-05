
window.cipher = {
 
  cifrar: (cadena, numero) => {
    let espacio= '';
    let cifrado = '';
    let i;
    for (i = 0; i < cadena.length; i++){
      let j=  cadena.charCodeAt(i)
      if (j == 32){
        cifrado += " ";
        console.log(espacio,'espacio');
      }
      else{
      let m =(j - 65 + parseInt (numero)) % 26;
      let np = m + 65;
      //console.log(np,'np')  
      cifrado += String.fromCharCode(np);
      }
    } 
    return cifrado; // Retorna el nuevo mensaje codificado.
  },


  descifrar: (cadena, numero) => {
    let espacio= '';
    let descifrado = '';
    let i;
    for (i = 0; i < cadena.length; i++){
      let j=  cadena.charCodeAt(i)
      if (j == 32){
        descifrado += " ";
        console.log(espacio,'espacio');
      }
      else{
      let m =(j + 65 - parseInt(numero)) % 26;
      let np = m + 65;
      console.log (np,"np");
      //console.log(np,'np')  
      descifrado += String.fromCharCode(np);
      }
    } 
    return descifrado; // Retorna el nuevo mensaje codificado.
  },

 /* descifrar: (cadena, numero) => {

      let descifrado = '';
      let i;
      for (i = 0; i < cadena.length; i++){
        let m = (cadena.charCodeAt(i) - 65 - parseInt (numero)) % 26;
        let np = m + 65;
        descifrado += String.fromCharCode(np);
        
      } 
      return descifrado; // Retorna el nuevo mensaje decodificado.
  }
};*/
};