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
      newPlace = (parseInt(charPosition) + 65 - parseInt(offset)) % 26 + 65;
      encodeSentence = encodeSentence + String.fromCharCode(newPlace);
    }
          return encodeSentence;
    }
};
