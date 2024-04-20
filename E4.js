function sacarFactorial(Numero){
    if (Numero === 0){
        return 1;
    }if (Numero === 1){
        return 1;
    }

    let sumaAcumulada = 1;

    for (let i = 2; i <= Numero; i++){
        sumaAcumulada += i;
    }

    return sumaAcumulada;
}

let numero1 = 6;
let numero2 = 0;
let numero3 = 4;
let numero4 = 1;

console.log("El factorial del número " + numero1 + " es: ", sacarFactorial(numero1));
console.log("El factorial del número " + numero2 + " es: ", sacarFactorial(numero2));
console.log("El factorial del número " + numero3 + " es: ", sacarFactorial(numero3));
console.log("El factorial del número " + numero4 + " es: ", sacarFactorial(numero4));