//1 - crie uma função que exiba uma mensagem no console
function Home(Oii){
    console.log(`Essa aqui sou eu!`);
}
Home(`Home`);

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nomes(myName){
    console.log(`Vamos lá ${myName}`);
}
nomes(`Dandara,`);
//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function style(nome, number, music){
    console.log(`Meu nome: ${nome}, minha idade: ${number}, meu estilo de musica favorita: ${music}.`);
}
style(`Dandara Aryadne`, `30`, `classico`);

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function dados(film, music){
    console.log(`Meu filme favorito: ${film}, minha musica favorita: ${music} .`);
}
dados(`Stardust`, `Way of Life`);

//BÔNUS//

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function triple(i){
    return 3*i
}
console.log(triple(58))