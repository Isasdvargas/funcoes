//exercício 1

function imprimir(){
    return "Eu sou Isadora , tenho 16 anos, moro em São Leopoldo, sou estudante."
}
console.log(imprimir())

//exercício 2 

function informacaopessoal(nome, idade, cidade, profissão) {
    return `Olá ${nome}, tenho ${idade} moro em ${cidade} e sou ${profissão}`
}
alert(informacaopessoal('isadora', 16, 'São Leopoldo', 'Estudante'))

//exercício 3

function retornamaior(num1,num2) {
    return num1 >= num2;
}
alert(retornamaior(Number(1), Number(3)))

//exercício 4 

function epar(num) {
    return num % 2 === 0;
}
alert(epar(355))

//exercício 5 

let desafioA = (meuTime) => {
    return meuTime;
}
alert(desafioA("Brasil"))

//exercício 6 

