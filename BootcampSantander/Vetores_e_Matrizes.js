//=======> Aprendendo vetores <=======
let pokemon = ["pikachu", "charmander", "bulbassaur"]

console.log(pokemon) //aqui vai printar todoos os pokemons que estão neste vetor

console.log(pokemon[2]) //aqui vai printar apenas o pokemons que está na posição 2

//como "pokemon" é um array, posso manipular ele de várias formas:
//usando funções/métodos:
pokemon.push("jigglypuff")//adiciona elemento
pokemon.pop() //remove ultimo elemento e retorna
pokemon.shift()//remove o primeiro elemento e retorna
//entre outros...
console.log(pokemon)

//usando propriedades:
console.log(pokemon.length) //vai printar quantos elementos tem no vetor


//=======> Aprendendo matrizes <=======
let timePokemon = [
    ["pikachu", 'M', 1], //vetor 1
    ["charmander", "F", 51], //vetor 2
    ["bulbassaur", 'M', 12], //vetor 3
] //nota-se que há vetores dentro de um vetor e eles podem ter vários tipos

console.log(timePokemon[0])//dentro de uma matriz, se eu passar apenas uma posição ao printar, no console vai aparecer a linha inteira.
//ou seja, na posição 0 vai ser printado: ['pikachu', 'M', 'level 1']

console.log(timePokemon[0][2])//agora vou acessar uma informação específica dentro deste vetor da posição 0, que seria: "level 1"

//sendo assim, já consigo brincar:
console.log(`Esse é o ${timePokemon[0][0]} do sexo ${timePokemon[0][1]} e está no nível ${timePokemon[0][2]}`)

console.table(timePokemon)//essa é uma boa forma de visualizar a matriz e ter noção dos indices

