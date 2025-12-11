//=======> Aprendendo operadores aritméticos <=======
//adição
let idade = 30;
console.log(idade);

idade = 30 + 6 //reatribuição

console.log(`minha nova idade: ${idade}`);

//subtração
let codigoDoProduto = 1023;
let codigoExato = codigoDoProduto - 1000;

console.log(`O código do produto é: ${codigoExato}`);

//multiplicação
let precoProduto = 100.99;
let valorComTaxa = precoProduto * 2;

console.log(`valor com taxa: ${valorComTaxa}`)

//divisão
let notaDoMercado = 50.00;

console.log(`O valor de ${notaDoMercado} dividido por 2 fica: ${notaDoMercado/2}`)

//módulo
let num = 30;

if(num % 2 === 0){ //se o resto da divisão por 2 for zero, é par.
    console.log(`O número ${num} é par!`)
}else{
    console.log(`O número ${num} é impar!`)
}

//incremento
let contador = 0;
contador ++ //aumenta 1

console.log(`Agora o contador está com valor ${contador}`)

//decremento
contador = 10;
contador-- //diminui 1

console.log(`Agora o contador está com valor ${contador}`)

//atribuição
let preco = 10;
preco += 4
preco -= 2
preco *= 10
preco /= 2
preco %= 2 

console.log(preco)

//=======> Aprendendo expressões <=======
let resultado = 2 * 5 + 5 //esperado: 20

console.log(resultado) //resultado: 15

resultado = 2 * (5 + 5)

console.log(resultado) // agora sim o resultado é resultado: 20
//obs:o que está entre parentesis tem prioridade, vai ser resolvido primeiro

//=======> Aprendendo operadores relacionais <=======
//operadores "==" e "==="
let numero = "1"

console.log(numero == "1")
console.log(numero ==  1)
console.log(numero ==  '1')
console.log(numero ==  1.0)
//nota-se que usando apenas "==" só há uma comparação do valor, independente do tipo

console.log(numero === "1")
console.log(numero ===  1)
console.log(numero ===  '1')
console.log(numero ===  1.0)
//colocando "===" há uma verificação se DE FATO é a mesma coisa, ou seja, a verificação de string está "true" pois estou comparando com uma string. 

//então:
// = => atribuição
// == => comparação valor
// === => comparação valor e formato

let cpfBloqueado = "123.456.789-10"
let cpfUsuario = "321.654.987-01"

let ehCpfBloqueado = cpfUsuario === cpfBloqueado

console.log(`O usuário está barrado? - ${ehCpfBloqueado}`)


//operadores "!="
let marca = "Apple"

console.log(marca !== "Apple") //"a marca (apple) é diferente de "apple"? Falso"

console.log(marca !== "Samsung")//"a marca (apple) é diferente de "samsung"? Verdadeiro"

//operadores ">", "<", ">=" e "<="
let idadeMinima = 18
let idadeDoUsuario = 17

if(idadeDoUsuario >= idadeMinima){
    console.log("O usuário está permitido a usar o sistema")
}else{
    console.log("O usuário não tem a idade mínima!")
}

let idadaMaxima = 6
idadeDoUsuario = 3

if(idadeDoUsuario < idadaMaxima){
    console.log("O usuário terá que ser tratato com um pediatra")
}

//=======> Aprendendo operadores lógicos <=======
//operador "&&"
num = 10
if(num > 0 && num % 2 == 0){ //"o "num" é maior que zero E com resto 0", ou seja, só vai atender condição se for maior que zero e se o resto for 0, apenas 
    console.log("Esse número é par maior que zero")
}
//operador "||"
if(num > 5 && num % 2 == 0){ //"o "num" é maior que cinco OU com resto 0" ou seja, um dos dois casos atendem a condição
    console.log("Esse número é par e maior que cinco")
}
//operador "!"
if(num !== 8 && num % 2 == 0){ //"o "num" é maior que zero E com resto 0"
    console.log("Esse número é par e diferente de 8")
}