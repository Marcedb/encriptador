const texto = document.querySelector(".texto")
const mensaje = document.querySelector(".mensaje")


//FUNCION ENCRIPTAR

function btnEncriptar() {
    const textoEncriptado = encriptar(texto.value)
    mensaje.value = textoEncriptado;
    //mensaje.style.backgroundImage="none"   
    texto.value = "" //para limpiar el mensaje
    mensaje.style.background = "none"
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll
                (matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptado;


}

//FUNCION DESENCRIPTAR

function btnDesencriptar() {
    const textoEncriptado = desencriptar(texto.value)
    mensaje.value = textoEncriptado;
    texto.value = "" //para limpiar la casilla 

}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll
                (matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado;


}

//FUNCION COPIAR

function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")
}

