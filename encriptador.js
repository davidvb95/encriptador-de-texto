// Declaración de variables y referencia al DOM
const textoEntrada = document.getElementById('textoentrada');
const textoSalida = document.getElementById('textosalida');
const sinRespuesta = document.getElementById('sinrespuesta');
const respuestaTexto = document.getElementById('respuestatexto');

// Función para validar el texto (solo minúsculas y sin acentos)
function validar_texto(input) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(input.value)) {
        input.value = input.value.slice(0, -1); // Elimina el carácter inválido
        alert('Solo se permiten letras minúsculas y sin acentos.');
    }
}

// Función para procesar la petición de encriptado o desencriptado
function procesar_Peticion(accion) {
    const texto = textoEntrada.value;
    if (texto.trim() === '') {
        sinRespuesta.style.display = 'block';
        respuestaTexto.style.display = 'none';
    } else {
        sinRespuesta.style.display = 'none';
        respuestaTexto.style.display = 'block';

        if (accion === 'encriptar') {
            textoSalida.value = encriptar(texto);
        } else if (accion === 'desencriptar') {
            textoSalida.value = desencriptar(texto);
        }

        // Limpiar el campo de entrada después de procesar
        textoEntrada.value = '';
    }
}

// Función de encriptado
function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/s/g, 'sos')
                .replace(/r/g, 'rer')
                .replace(/n/g, 'nen')
                .replace(/i/g, 'imes')
                .replace(/d/g, 'ded')
                .replace(/l/g, 'lel')
                .replace(/c/g, 'cec')
                .replace(/u/g, 'ufat');
}

// Función de desencriptado
function desencriptar(texto) {
    return texto.replace(/ufat/g, 'u')
                .replace(/cec/g, 'c')
                .replace(/lel/g, 'l')
                .replace(/ded/g, 'd')
                .replace(/imes/g, 'i')
                .replace(/nen/g, 'n')
                .replace(/rer/g, 'r')
                .replace(/sos/g, 's')
                .replace(/ober/g, 'o')
                .replace(/ai/g, 'a')
                .replace(/enter/g, 'e');
}

// Función para copiar el texto encriptado/desencriptado
function copiar_Texto() {
    if (textoSalida) {
        navigator.clipboard.writeText(textoSalida.value)
            .then(() => {
                alert('Texto copiado al portapapeles.');

                // Limpiar el campo de salida después de copiar
                textoSalida.value = '';
                sinRespuesta.style.display = 'block';
                respuestaTexto.style.display = 'none';
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    } else {
        alert('No se encontró el área de texto para copiar.');
    }
}

