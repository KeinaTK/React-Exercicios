const vetor = [1, 2, 3, 4];

const vetorNovo = vetor.map((x) => x + 1);

console.log(vetorNovo);

// outro exemplo
const string = ["10", "20", "30"];

const int = string.map((item) => parseInt(item));
const quadrado = int.map((num) => num**2);

console.log(int, quadrado);

//outro exemplo
const vetor2 =["a", "b", "c"];

const novoVetor2 = vetor2.map(item => item.toUpperCase());

console.log(novoVetor2);