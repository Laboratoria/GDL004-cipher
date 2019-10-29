

Function encodeSetence (){

  let offset = document.getElementById('offsetEncodeNumber').value;
  let string = document.getElementById('stringMessage').value;

  let encodeSetence = window.clasified.cipher(offset,string);

  document.getElementById('EncodeWords').innerText = cipherText;

}
