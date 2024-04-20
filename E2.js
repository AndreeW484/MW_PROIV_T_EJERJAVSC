function calcularIMC(peso, altura){
    let IMC = peso / (altura * altura);
    return IMC.toFixed(2);
}

// Peso debe ser ingresado en KG y la altura en M.

let peso = 85;
let altura = 1.81;

let resultIMC = calcularIMC(peso, altura);

console.log("El Indice de Masa Corporal de la persona es de: ", resultIMC)