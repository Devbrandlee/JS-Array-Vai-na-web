console.log("olá, mundo!");

//var, let, const

//Array

let mercado = ["Picanha", "Carvão", "Vinagrete", "Pão de alho", "Maionese"];

console.log("Não vou levar o " + mercado[2]);

//Se eu quiser que apareça dois itens da lista ao mesmo tempo.
//Console.log(mercado[4], mercado[2]);

//metodos

//Comprimento
console.log("Comprimento " + mercado.length);


//Método push.

//Empurra para o carrinho.
//Adiciona o item ao final do array
mercado.push("Coca-cola");
console.log(mercado);

let compras = [
  "ps5 pro",
  "iphone",
  "chocolate",
  "maquiagem",
  "almoço",
  "perfume",
];

//Diferente do push o unshift adiciona no começo do array.
compras.unshift("Colar de rubi");
console.log(compras);


//Comands para Remover Itens:

//Pop - Remove o último item do array
compras.pop();
console.log(compras);

//Remover o Primeiro item.
compras.shift();
console.log(compras);
