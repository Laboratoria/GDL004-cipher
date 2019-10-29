window.clasified = {

cipher(offset, string){


  let newPlace = 0;
  let charPosition = 0;
  let encodeSetence = "";

for (let i = 0; i < string.lenght; i++){

    charPosition = string.charcodeAt(i);
    newPlace = (parseInt(charPosition) - 65 + parseInt(offset)) % 26 + 65;
    cipherText = Encodewords + String.fromCharcode(newPlace);

}

}

};
