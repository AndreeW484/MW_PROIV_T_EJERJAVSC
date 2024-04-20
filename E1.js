function contarPalabras(frase){
    frase = frase.trim();

    let palabras = frase.split(/\s+/);
    return palabras.length;
}

let frase = "A veces es necesario cambiar de ruta para llegar a nuestro destino";
let cantpalabras = contarPalabras(frase)
console.log("La cantidad de palabras que contiene la frase es de: ", cantpalabras)