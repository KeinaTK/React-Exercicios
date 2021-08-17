let vetor = [];

// vetor[0] = 1;
// vetor[1] = 2;
// vetor["indice"] = "teste";

// console.log(vetor);

for(let i = 0; i<10; i++){
    vetor[i] = i + 1; //pode usar o push também
}

console.log(vetor);

for(let valor of vetor){
    console.log(valor);
}

for(let indice in vetor){
    console.log(indice, vetor[indice]);
}

// matriz
mat = [];
for(let linha of matriz){
    for(let elemento of linha){
        console.log(elemento); 
    }
}