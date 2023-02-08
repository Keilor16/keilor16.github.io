const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const textoCopiar = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}// encripta un mensaje y lo muestra en un text area

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}// desencripta un mensaje y lo muestra en un text area

function btnCopiar(){
    navigator.clipboard.writeText(textoCopiar.value);
}


function encriptar(StringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringEncriptado.includes(matrizCodigo[i][0])) {
            StringEncriptado = StringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringEncriptado;
}// sustituye valores

function desencriptar(StringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringDesencriptado = StringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringDesencriptado.includes(matrizCodigo[i][1])) {
            StringDesencriptado = StringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return StringDesencriptado;
}// sustituye valores
