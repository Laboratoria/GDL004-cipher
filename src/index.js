



function encodeSentence(){

  let offset = document.getElementById('offsetEncodeNumber').value;
  let string = document.getElementById('stringMessage').value;
  let encodeSentence = window.cipher.encode(offset, string);

  document.getElementById('encodeWords').innerText = encodeSentence;

}

function decodeSentence(){

  let offset = document.getElementById('offsetEncodeNumber').value;
  let string = document.getElementById('stringMessage').value;

  let encodeSentence = window.cipher.decode(offset, string);

  document.getElementById('encodeWords').innerText = encodeSentence;

}

function reset(){

document.getElementById('offsetEncodeNumber').value = "";
document.getElementById('stringMessage').value = "";
document.getElementById('encodeWords').innerText = "Your Message is...";

}

document.getElementById('codeBtnId').addEventListener('click', encodeSentence);
document.getElementById('decodeBtnId').addEventListener('click', decodeSentence);
document.getElementById('resetBtnId').addEventListener('click', reset);
