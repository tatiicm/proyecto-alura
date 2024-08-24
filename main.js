/* Elementos del dom a utilizar */
textoProcesar = document.getElementById('seccion-principal-texto-procesar')
textoProcesado = document.getElementById('texto-procesado')
btnEncriptar = document.getElementById('boton-encriptar')
btnDesencriptar = document.getElementById('boton-desencriptar')
containerNoInformacion = document.getElementById('contenedor-no-informacion')
rightSide = document.getElementById('side')
btnCopiar = document.getElementById('boton-copiar')
seccionProcesado = document.getElementById('seccion-procesado')

/* estilos iniciales */
rightSide.classList.add('center')
seccionProcesado.classList.add('invisible')


/* Event listeners */
btnEncriptar.addEventListener('click', () => {
    procesarEncripcion()
})

btnDesencriptar.addEventListener('click', () => {
    procesarDesencripcion()
})

btnCopiar.addEventListener('click', () => {
    copiarTexto()
})


/* funciones */
function procesarDesencripcion(){
    const texto = getTexto()
    if (validarTexto(texto)) {
        desencriptar(texto)
        controlarVisibilidad()
    } else {
        alert("El texto ingresado no cumple con el formato, itente de nuevo")
    }
}

function procesarEncripcion(){
    const texto = getTexto()
    if (validarTexto(texto)) {
        encriptar(texto)
        controlarVisibilidad()
    } else {
        alert("El texto ingresado no cumple con el formato, itente de nuevo")
    }
}

function encriptar(texto){
    const encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    textoProcesado.innerHTML = encriptado

}

function desencriptar(texto){
    const desencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    textoProcesado.innerHTML = desencriptado

}

function controlarVisibilidad(){
    if (textoProcesado.innerHTML === "") {
        containerNoInformacion.classList.remove('invisible');
        seccionProcesado.classList.add('invisible');
        rightSide.classList.add('center');
    } else {
        containerNoInformacion.classList.add('invisible');
        seccionProcesado.classList.remove('invisible');
        rightSide.classList.remove('center')
    }
}

function validarTexto(texto) {
    // Expresión regular para permitir solo letras minúsculas sin acentos
    const regex = /^[a-z]+$/;
    return regex.test(texto);
}

function getTexto(){
    return textoProcesar.value;
}

function copiarTexto(){
    const texto = textoProcesado.innerHTML
    navigator.clipboard.writeText(texto).then(
            function(){
                alert("Texto copiado correctamente!");
            })
          .catch(
             function() {
                alert("Error al copiar el texto...");
          });

}