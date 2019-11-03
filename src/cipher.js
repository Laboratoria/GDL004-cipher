window.cipher = {

encode (offset, string){

  let newPlace = 0;
  let charPosition = 0;
  let encodeSentence = "";


  for (let i = 0; i < string.length; i++){
      charPosition = string.charCodeAt(i);

    if (charPosition >= 65 && charPosition <= 90) {
      newPlace = (parseInt(charPosition) - 65 + parseInt(offset)) % 26 + 65;
      encodeSentence = encodeSentence + String.fromCharCode(newPlace);
    }
    else if (charPosition >= 97 && charPosition <= 122) {
      newPlace = (parseInt(charPosition) - 97 + parseInt(offset)) % 26 + 97;
      encodeSentence = encodeSentence + String.fromCharCode(newPlace);
    }
    else {
      encodeSentence = encodeSentence + string.charAt(i);
    }

  }
        return encodeSentence;
},

  decode(offset, string){

    let newPlace = 0;
    let charPosition = 0;
    let encodeSentence = "";

    for (let i = 0; i < string.length; i++){
      charPosition = string.charCodeAt(i);

      if (charPosition >= 65 && charPosition <= 90) { //Condición para que se realize el procedimiento si la letra es mayúscula//

        let sumResult = parseInt(charPosition) - 65 - parseInt(offset); // a la letra ubicada en código ASCII se le resta el número donde comienza el abecedario en código ASCII y el número de posiciones que habia avanzado al codificar//
        let sumResultModule = sumResult % 26; //Se saca el módulo resultante de las restas anteriores que da cómo resultado número negativo//

        newPlace = ((sumResultModule + 26) % 26 ) + 65; // a la variable "SumResult" se le suman 26, para convertirlo a número positivo, una vez que tiene el número positivo, se vuelve a sacar el modulo (esta vez positivo) y se suman 65 para que nos de la letra descifrada
        encodeSentence = encodeSentence + String.fromCharCode(newPlace); // Concatenación de resultados.
      }
      else if (charPosition >= 97 && charPosition <= 122) {

        let sumResult = parseInt(charPosition) - 97 - parseInt(offset);
        let sumResultModule = sumResult % 26;

        newPlace = ((sumResultModule + 26) % 26) + 97;
        encodeSentence = encodeSentence + String.fromCharCode(newPlace);
      }
      else {

        encodeSentence = encodeSentence + string.charAt(i); // Se utilizó el "charAt" para que tomara el caractér de la posición que sigue dentro de la iteración cómo el usuario lo ingreso, para concatenarlo al resultado"//
      }

    }
    return encodeSentence;
  }
};
