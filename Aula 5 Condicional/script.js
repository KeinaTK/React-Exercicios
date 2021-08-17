// Exercício 1
let sol = true;
sol = false;

//Exercício 2
if(sol){
    console.log("Vou a praia");
}else {
    console.log("Vou pro campo");
}

let num = 1;

if(num > 0){
    console.log("Número positivo");
}else if(num == 0){
    console.log("Número igual a zero");
}else{
    console.log("Número negativo");
}

//Exercício 3
let numero = 3;
let parOuImpar = numero % 2 == 0 ? "par" : "ímpar";
console.log("O número é " + parOuImpar);

//Exercício 4
let sinal = "vermelho";

switch(sinal){
    case "verde":
        console.log("Pode Passar");
        break;
    case "amarelo":
        console.log("Prestes a fechar");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    default:
        console.log("Sinal inválido");
}