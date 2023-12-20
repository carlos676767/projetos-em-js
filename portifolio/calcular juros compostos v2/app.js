let botao = document.getElementById("botao"); // Exibe o anual.
let botao2 = document.getElementById("botao2"); // Quando clicar, exibe o mensal.
let totaljuros = document.getElementById("totaljuros"); // puxei o id para obter o total de juros.
let valorinicial = document.getElementById("valorinicial"); // aqui eu puxei meu id para obter meu valor inicial e fazer as contas para obter os outros resultados do juros mensais e anuais.
let limpar = document.getElementById("limpar"); // aqui eu puxei o id do meu botao para limpar tudo.


botao.addEventListener("click", function () { // criei uma funcao 
    let capitalinicial = parseFloat(document.getElementById("capitalinicial").value); //puxei meus id e coloquei o .value para pegar oque for digitado.
    let taxadejuros = parseFloat(document.getElementById("taxadejuros").value); //puxei meus id e coloquei o .value para pegar oque for digitado.
    let periodo = parseFloat(document.getElementById("periodo").value); //puxei meus id e coloquei o .value para pegar oque for digitado.

    if (isNaN(capitalinicial) || isNaN(taxadejuros) || isNaN(periodo) || taxadejuros <= 0 || periodo <= 0 || capitalinicial <= 0) { //criei uma verificacao que vai olhar se e uma letra ou numero menor ou igual a zero, caso for nao ira fazer os calculos.
        totaljuros.innerHTML = "Digite um número maior que <strong>0</strong> para saber a taxa de juros."; //aqui caso oq esta ali em cima acontecer ira fazer aparecer essa mensagem.
    } else { // se nao vem os calculos abaixo.
        let somar = capitalinicial * Math.pow(1 + taxadejuros / 100, periodo); // capital inicial vezes a potencia elavada a um dividido por 100 o periodo.
        totaljuros.style.color = "#FF5353"; //definismo uma cor da saida do resultado.
        totaljuros.innerHTML = ` ${somar.toFixed(2)}`; //coloquei para receber meu resultado no total de juros e em seguida ira ser usado duas casas decimais.
        valorinicial.style.color = "#FF5353"; //definismo uma cor da saida do resultado.
        valorinicial.innerHTML = `${capitalinicial.toFixed(2)}`; //coloquei para receber meu resultado no total de juros e em seguida ira ser usado duas casas decimais.
        let somar1 = somar - capitalinicial; //aqui eu obtive minha taxa de juros sem o valor depositado.
        total.style.color = "#FF5353";  //definismo uma cor da saida do resultado.
        total.innerHTML = `${somar1.toFixed(2)}`; //coloquei em duas casas decimais 
    }
});

let total = document.getElementById("total") // Mostra o total.

//criei um evento np botao para limpar 
limpar.addEventListener("click", function () {
    valorinicial.innerHTML = " ";
    totaljuros.innerHTML = " ";
    total.innerHTML = " ";
});


// calcular os juros compostos mensais.

function somar(){ //criei uma funcao de somar.
    let capitalinicial = parseFloat(document.getElementById("capitalinicial").value); //puxei oq foi digitado
    let taxadejuros = parseFloat(document.getElementById("taxadejuros").value);  //puxei oq foi digitado
    let periodo = parseFloat(document.getElementById("periodo").value);  //puxei oq foi digitado
    taxadejuros = taxadejuros /100 //dividi minha taxa de juros por 100
    let somartudo =  capitalinicial * (1 + (taxadejuros / 100) / 12) ** (periodo * 12) //fiz a soma capital inicial vezes mais um a taxa de juros dividod por 100 e dividod por 12 a potencia periodo vezes 12
    let lucros = somartudo - capitalinicial

    if(isNaN (capitalinicial) || isNaN(taxadejuros) || isNaN (periodo) || capitalinicial <= 0 || taxadejuros <= 0 || periodo <= 0){ //criei uma verificacao que vai olhar se e uma letra ou numero menor ou igual a zero, caso for nao ira fazer os calculos.
        total.innerHTML = `digite um numero maior que zero para <br> saber a taxa de juros mensal.`
    } else{
        totaljuros.innerHTML = somartudo.toFixed(2); //coliquei em duas casas decimais.
        totaljuros.style.color = "#FF5353" //pintei 

        valorinicial.innerHTML = capitalinicial //mostrei o resultado
        valorinicial.style.color = "#FF5353" //pintei

        total.innerHTML = lucros.toFixed(2) //coloquei em duas casas decimais
        total.style.color = "#FF5353" //pintei

    }
}
