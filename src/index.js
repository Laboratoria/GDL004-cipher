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
    let password = document.getElementById("Password").value;
    //document.getElementById("resultado").value = i;
 // let mayusculas = i.toUpperCase();
    let mayusculas = cipher.descifrar(i, numero, password);
    document.getElementById("resultado").value = mayusculas;
}

//ESTA FUNCIO BORRA EL ESPACIO DE TEXTO A CIFRAR
function DeleteC(){
    document.getElementById("mensaje").value = ""
} 
//ESTA FUNCION BORRA EL ESPACIO DEL TEXTO DESCIFRADO
function DeleteD(){
    document.getElementById("resultado").value = ""
    document.getElementById("Password").value = ""
} 
