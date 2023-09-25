
somar.addEventListener("click", function(){
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let tela = document.getElementById("tela")
    let somar = document.getElementById("somar")
    let s = Number(n1.value) * Number(n2.value) / 100
  document.getElementById("tela").innerHTML = s
})




function clean(){
    let tela = document.getElementById("tela").innerHTML = " "
}

