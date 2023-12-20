import {
  cores1,
  cores2,
  cores3,
  cores4,
  cores5,
  cores6,
  cores7,
  cores8,
} from "./cores.js";

const botao = document.querySelector("button");

const gerarCores = () => {
  let gerarCor = Math.floor(Math.random() * cores1.length);
  let indice = cores1[gerarCor];
  document.getElementById("cor1").style.backgroundColor = indice;
  document.getElementById("cor2").style.backgroundColor = indice;
  document.getElementById("cor1").textContent = indice;
};

const gerarCores2 = () => {
  let gerarCor = Math.floor(Math.random() * cores2.length);
  let indice = cores2[gerarCor];
  document.getElementById("cor3").style.backgroundColor = indice;
  document.getElementById("cor4").style.backgroundColor = indice;
  document.getElementById("cor3").textContent = indice;
};

const gerarCores3 = () => {
  let gerarCor = Math.floor(Math.random() * cores3.length);
  let indice = cores3[gerarCor];
  document.getElementById("cor5").style.backgroundColor = indice;
  document.getElementById("cor6").style.backgroundColor = indice;
  document.getElementById("cor5").textContent = indice;
};

const gerarCores4 = () => {
  let gerarCor = Math.floor(Math.random() * cores4.length);
  let indice = cores4[gerarCor];
  document.getElementById("cor7").style.backgroundColor = indice;
  document.getElementById("cor8").style.backgroundColor = indice;
  document.getElementById("cor7").textContent = indice;
};

const gerarCores5 = () => {
  let gerarCor = Math.floor(Math.random() * cores5.length);
  let indice = cores5[gerarCor];
  document.getElementById("cor9").style.backgroundColor = indice;
  document.getElementById("cor10").style.backgroundColor = indice;
  document.getElementById("cor9").textContent = indice;
};

const gerarCores6 = () => {
  let gerarCor = Math.floor(Math.random() * cores6.length);
  let indice = cores6[gerarCor];
  document.getElementById("cor11").style.backgroundColor = indice;
  document.getElementById("cor12").style.backgroundColor = indice;
  document.getElementById("cor11").textContent = indice;
};

const gerarCores7 = () => {
  let gerarCor = Math.floor(Math.random() * cores7.length);
  let indice = cores7[gerarCor];
  document.getElementById("cor13").style.backgroundColor = indice;
  document.getElementById("cor14").style.backgroundColor = indice;
  document.getElementById("cor13").textContent = indice;
};

const gerarCores8 = () => {
  let gerarCor = Math.floor(Math.random() * cores8.length);
  let indice = cores8[gerarCor];
  document.getElementById("cor15").style.backgroundColor = indice;
  document.getElementById("cor16").style.backgroundColor = indice;
  document.getElementById("cor15").textContent = indice;
};

const mudarFundo = () => {
  let gerarCor = Math.floor(Math.random() * cores3.length);
  let indice = cores3[gerarCor];
  document.body.style.backgroundColor = indice;
};

botao.addEventListener("click", function () {
  gerarCores();
  gerarCores2();
  gerarCores3();
  gerarCores4();
  gerarCores5();
  gerarCores6();
  gerarCores7();
  gerarCores8();
  mudarFundo();
});
