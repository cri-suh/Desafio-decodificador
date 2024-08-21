// script.js

function btEncriptador() {
    const textoEntrada = document.querySelector(".text-entrada").value;
    const resultado = textoEntrada
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector(".resultado").value = resultado;
}

function btDescriptador() {
    const textoEntrada = document.querySelector(".text-entrada").value;
    const resultado = textoEntrada
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.querySelector(".resultado").value = resultado;
}

function Copiar() {
    const textoResultado = document.querySelector(".resultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}
