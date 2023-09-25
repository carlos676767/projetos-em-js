
let botao = document.getElementById("botao") // puxamos o id do botao
let tela = document.getElementById("tela") // puxamos o id tela


botao.addEventListener("click", function(){ // criamos uma funcao
    let input = document.getElementById("numeros").value // puxamos oque for digitado do input
    if(input %2 == 0){ // se o resto da divisao for 2 o numero e par, se nao e impar
        tela.innerHTML = `o numero ${input} é par`
    }else{
        tela.innerHTML = `o numero ${input} é impar`
    }
})