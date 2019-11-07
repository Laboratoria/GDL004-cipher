
window.cipher = {

 //FORMULA PARA EL CIFRADO, DECLARACIÓN DE VARIABLES
  cifrar: (cadena, numero) => {
      //let espacio= '';
      let cifrado = ''
      let i;
      for (i = 0; i < cadena.length; i++){
        let j=  cadena.charCodeAt(i);
        //AQUI ESTOY HACIENDO LA CONDICION DE ESCRIBIR ESPACIOS
          if (j == 32){
            cifrado += " ";
            //console.log(espacio,'espacio');
          }
        // AQUI REGRESA EL CONTEO DE STRINGS Y APLICA LA FORMULA DE CIFRAR
          else{
          let m =(j - 65 + parseInt (numero)) % 26;
          let np = m + 65; 
          cifrado += String.fromCharCode(np);
        }
      } 
    return cifrado; // Retorna el nuevo mensaje cifrado.
  },//esta , es super importante para que continue el porceso

  // CONDICION PASSWORD PARA EL DESCIFRADO
  //if(validar==)


  //FORMULA PARA EL DESCIFRADO, DECLARACIÓN DE VARIABLES
  descifrar: (cadena, numero, password1) => {
    if (password1 == "holi") {
      //slet espacio= '';
      let descifrado = '';
      let i;
      for (i = 0; i < cadena.length; i++){
        let j=  cadena.charCodeAt(i);
        //AQUI ESTOY HACIENDO LA CONDICION DE ESCRIBIR ESPACIOS
        if (j == 32){
          descifrado += " ";
        }
        // AQUI REGRESA EL CONTEO DE STRINGS Y APLICA LA FORMULA DE DESCIFRAR
        else{
        let m =(j + 65 - parseInt(numero)) % 26;
        let np = m + 65;
        descifrado += String.fromCharCode(np);
        }
      } 
      return descifrado; // Retorna el nuevo mensaje descifrado.
    } else {
      alert("no seas chismoso");
      return cadena; // Retorna el nuevo mensaje descifrado.
    }
    
  },//esta , tambien es importante

}; //con este ; ya terminas