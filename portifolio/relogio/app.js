// Função para exibir a hora atual
function horas() {
    let agora = new Date(); // Obtém a data e hora atual
    let tempo = agora.getHours().toString().padStart(2, '0'); // Obtém a hora atual
    let resultado = `${tempo}`; // Converte a hora para uma string
    document.getElementById("hora").innerHTML = resultado; // Define o conteúdo do elemento com o id "hora" como a hora atual
}

horas(); // Chama a função "horas" para exibir a hora inicialmente

// Função para exibir os minutos atuais
function minutos() {
    let minutos = new Date(); // Obtém a data e hora atual
    let setMin = minutos.getMinutes().toString().padStart(2, '0'); // Obtém os minutos atuais
    let Resultado = `${setMin}`; // Converte os minutos para uma string
    document.getElementById("min").innerHTML = Resultado; // define que meu resultado sera mostrado no id min
}

minutos(); // Chama a função "minutos" para exibir os minutos inicialmente

// Função para exibir os segundos atuais
function segundos() {
    let segundos = new Date(); // Obtém a data e hora atual
    let setSeg = segundos.getSeconds().toString().padStart(2, '0'); // Obtém os segundos atuais
    let mostrar = `${setSeg}`; // Converte os segundos para uma string
    document.getElementById("segundos").innerHTML = mostrar; // Define o conteúdo do elemento com o id "segundos" como os segundos atuais
}

segundos(); // Chama a função "segundos" para exibir os segundos inicialmente

// Configura um intervalo para atualizar os segundos a cada 1000 milissegundos (1 segundo)
setInterval(segundos, 1000);

// Função para exibir a data atual no formato "mm/dd/yyyy"
function mostrardias() {
    let novadata = new Date(); // Obtém a data atual
    let mes = (novadata.getMonth() + 1).toString().padStart(2, '0'); // Obtém o mês atual e formata com dois dígitos
    let dia = (novadata.getDate() + 1).toString().padStart(2, '0'); // Obtém o dia atual e formata com dois dígitos
    let ano = novadata.getFullYear().toString().padStart(2, '0') // Obtém o ano atual
    let mostrar3 = `${mes}/${dia}/${ano}`; // Formata a data completa
    document.getElementById("ano").innerHTML = mostrar3; // Define o conteúdo do elemento com o id "ano" como a data formatada
}


mostrardias(); // Chama a função "mostrardias" para exibir a data inicialmente
