const vetor = [1, 2, 3, 4, 5, 6]

const soma = vetor.reduce((estado, item) => estado + item, 0);

console.log(soma);

//outro exemplo
const matriz = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [6, 1, 5, 2, 3, 4]
];

const soma2 = (estado, item) => {
    return estado[0] + item[0] + item[1], estado[1] + item[2] + item[3], estado[2] + item[4] + item[5] 
};
const somaCol = matriz.reduce(soma2, [0,0,0]);

console.log(somaCol);

//outro
animais = [
    {
      nome: 'Fumaça',
      idade: 3,
      tipo: 'cao'
    },
    {
      nome: 'Tobby',
      idade: 6,
      tipo: 'cao'
    },
    {
      nome: 'Laminha',
      idade: 1,
      tipo: 'gato'
    },
    {
      nome: 'Nutella',
      idade: 3,
      tipo: 'cao'
    },
    ];
const caes = animais.filter(item => item.tipo === "cao");
const idade = caes.reduce((estado, item) => estado + item, 0);
console.log(7 * idade);