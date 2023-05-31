//Desafio dia 4 com número fixo
let numeroSecreto = 7;
let nome = prompt('Qual seu nome?');
let palpite = "";
let acertou = false;

for(let i = 0; i < 3; i++) {
  palpite = prompt(`${nome}, digite um número entre 1 e 10, você tem 03 tentativas para acertar!`);
  if (palpite == numeroSecreto) {
    alert(`Certa resposta ${nome}, agora pode jogar na loteria!`);
    acertou = true;
    break;
}
alert("Resposta errada!");
}
if(!acertou) {
  alert(`Infelizmente, você não acertou ${nome}. O número era ${numeroSecreto}!`);
}
   


//Desafio dia 4 com número aleatório
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let nome = prompt('Qual seu nome?');
let palpite = "";
let acertou = false;

for(let i = 0; i < 3; i++) {
  palpite = prompt(`${nome}, digite um número entre 1 e 10, você tem 03 tentativas para acertar!`);
  if (palpite == numeroSecreto) {
    alert(`Certa resposta ${nome}, agora pode jogar na loteria!`);
    acertou = true;
    break;
}
alert("Resposta errada!");
}
if(!acertou) {
  alert(`Infelizmente, você não acertou ${nome}. O número era ${numeroSecreto}!`);
}