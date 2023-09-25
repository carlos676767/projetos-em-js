let mostrar = document.getElementById("mostrar") // o resultado sera mostrado aqui
let calcule = document.getElementById("calcule") // botao para calcular

calcule.addEventListener("click", function(){

    let largura = parseFloat(document.getElementById("largura").value)
   let comprimento = parseFloat(document.getElementById("comprimento").value)
   let metro = parseFloat(document.getElementById("metro").value)

    let area = largura * comprimento
    let valorDoterreno = area * metro

    mostrar.innerHTML = `a area do terreno e de ${area.toFixed(2)} e o valor e de R$${valorDoterreno.toFixed(2)}`

})