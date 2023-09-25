var largura = parseFloat(prompt("Digite a largura do terreno: "))
var comprimento = parseFloat(prompt("Digite o comprimento do terreno: "))
var Valor = parseFloat(prompt("Digite o valor do metro: "))


var Area = largura * comprimento
var PrecoTerreno = tamanho * metro

alert(`a tamanho do terreno e de ${Area.toFixed(2)}`)
alert(`o valor do terreno e de ${PrecoTerreno.toFixed(2)}`)


var largura = parseFloat(prompt("Digite a largura do terreno: "));
var comprimento = parseFloat(prompt("Digite o comprimento do terreno: "));
var valorMetro = parseFloat(prompt("Digite o valor do metro: "));

var area = largura * comprimento;
var precoTerreno = area * valorMetro;

alert(`A área do terreno é de ${area.toFixed(2)} metros quadrados.`);
alert(`O valor do terreno é de R$ ${precoTerreno.toFixed(2)}.`);
