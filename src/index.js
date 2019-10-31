



function encodeSentence(){

  let offset = document.getElementById('offsetEncodeNumber').value;
  let string = document.getElementById('stringMessage').value;
  let uppercase = string.toUpperCase();
  let encodeSentence = window.cipher.encode(offset, string);

  document.getElementById('encodeWords').innerText = encodeSentence;

}

function decodeSentence(){

  let offset = document.getElementById('offsetEncodeNumber').value;
  let string = document.getElementById('stringMessage').value;

  let encodeSentence = window.cipher.decode(offset, string);

  document.getElementById('encodeWords').innerText = encodeSentence;

}
