let botao = document.getElementById("botao"); // Exibe o anual.
let botao2 = document.getElementById("botao2"); // Quando clicar, exibe o mensal.
let totaljuros = document.getElementById("totaljuros");
let valorinicial = document.getElementById("valorinicial");
let limpar = document.getElementById("limpar");


botao.addEventListener("click", function () {
    let capitalinicial = parseFloat(document.getElementById("capitalinicial").value);
    let taxadejuros = parseFloat(document.getElementById("taxadejuros").value);
    let periodo = parseFloat(document.getElementById("periodo").value);

    if (isNaN(capitalinicial) || isNaN(taxadejuros) || isNaN(periodo) || taxadejuros <= 0 || periodo <= 0 || capitalinicial <= 0) {
        totaljuros.innerHTML = "Digite um número maior que <strong>0</strong> para saber a taxa de juros.";
    } else {
        let somar = capitalinicial * Math.pow(1 + taxadejuros / 100, periodo);
        totaljuros.style.color = "#FF5353";
        totaljuros.innerHTML = ` ${somar.toFixed(2)}`;
        valorinicial.style.color = "#FF5353";
        valorinicial.innerHTML = `${capitalinicial.toFixed(2)}`;
        let somar1 = somar - capitalinicial;
        let total = document.getElementById("total");
        total.style.color = "#FF5353";
        total.innerHTML = `${somar1.toFixed(2)}`;
    }
});

let total = document.getElementById("total") // Mostra o total.

limpar.addEventListener("click", function () {
    valorinicial.innerHTML = " ";
    totaljuros.innerHTML = " ";
    total.innerHTML = " ";
});

// calcular os juros compostos mensais.

function somar(){
    let capitalinicial = parseFloat(document.getElementById("capitalinicial").value);
    let taxadejuros = parseFloat(document.getElementById("taxadejuros").value);
    let periodo = parseFloat(document.getElementById("periodo").value);
    taxadejuros = taxadejuros /100
    let somartudo =  capitalinicial * (1 + (taxadejuros / 100) / 12) ** (periodo * 12)
    let lucros = somartudo - capitalinicial

    if(isNaN (capitalinicial) || isNaN(taxadejuros) || isNaN (periodo) || capitalinicial <= 0 || taxadejuros <= 0 || periodo <= 0){
        total.innerHTML = `digite um numero maior que zero para <br> saber a taxa de juros mensal.`
    } else{
        totaljuros.innerHTML = somartudo.toFixed(2); 
        totaljuros.style.color = "#FF5353"

        valorinicial.innerHTML = capitalinicial
        valorinicial.style.color = "#FF5353"

        total.innerHTML = lucros.toFixed(2)
        total.style.color = "#FF5353"

    }
}
