

function encodeSentence(){

  let offset = document.getElementById('offsetEncodeNumber').value;
  let string = document.getElementById('stringMessage').value;

  let encodeSentence = window.cipher.encode(offset, string);

  document.getElementById('encodeWords').innerText = encodeSentence;

}
