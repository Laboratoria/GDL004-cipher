//Esta funcion hace que cuando le des click en le botón cifrar te arroje el texto en el recuadro de mesaje cifrado/decifrado
function Cypher(){
    let i = document.getElementById("mensaje").value;
    let numero = document.getElementById("numero").value;
    //let mayusculas = i.toUpperCase();
    let resultadoCifrado = cipher.cifrar(i.toUpperCase(), numero);
    document.getElementById("resultado").value = resultadoCifrado;
}

//Esta funcion hace que cuando le des click en le botón decifrar te arroje el texto en el recuadro de mesaje cifrado/decifrado
function Decipher(){
    let i = document.getElementById("resultado").value;
    let numero = document.getElementById("numero").value;
    //document.getElementById("resultado").value = i;
 // let mayusculas = i.toUpperCase();
    let mayusculas = cipher.descifrar(i, numero);
    document.getElementById("resultado").value = mayusculas;
}

//Esta funcion es para el botón borrar
function DeleteC(){
    document.getElementById("mensaje").value = ""
} 
function DeleteD(){
    document.getElementById("resultado").value = ""
} 

