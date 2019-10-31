window.cipher = {

encode (offset, string){

  let newPlace = 0;
  let charPosition = 0;
  let encodeSentence = "";


  for (let i = 0; i < string.length; i++){

      charPosition = string.charCodeAt(i);
      newPlace = (parseInt(charPosition) - 65 + parseInt(offset)) % 26 + 65;
      encodeSentence = encodeSentence + String.fromCharCode(newPlace);
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
