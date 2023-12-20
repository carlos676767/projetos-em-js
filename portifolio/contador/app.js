let tela = document.getElementById("tela")

let contador = 0
let negativo = 0

function contar() {
    ++contador
    tela.innerHTML = contador
}

function menos() {
  negativo = parseInt(document.getElementById("tela").innerHTML, 10);
   -- negativo; // Decrementa o valor da variável "negativo"
    document.getElementById("tela").innerHTML = negativo; // Atualiza o elemento HTML com o novo valor
}


function zerar() {
   tela.innerHTML = `0`
}

