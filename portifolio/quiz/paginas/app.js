var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")
var botao3 = document.getElementById("botao3")
var botao4 = document.getElementById("botao4")
var enviar = document.getElementById("enviar")

botao1.addEventListener("click", function(){
    botao1.style.backgroundColor = "#32CD32"
    if(enviar.style.display === "none"){ // ira verificar se o botao esta invisvel
        enviar.style.display = "block" // caso estiver o botao ira aparecer.
    }else{
        enviar.style.display = "none" // caso clicar novamente no botao ele ira desaparecer
    }
    
})


botao2.addEventListener("click", function(){ // 
    botao2.style.backgroundColor = "red"
    location.href = "..//index.html"
})

botao3.addEventListener("click", function(){
   botao3.style.backgroundColor = "red"
   location.href = "..//index.html"
})

botao4.addEventListener("click", function(){
    botao4.style.backgroundColor = "red"
    location.href = "..//index.html"
})

enviar.addEventListener("click", function(){
    location.href = "pergunta2.html"
})






