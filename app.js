let numeroSecreto = 7;
let quantidadeTentativas = 1;
let nome = prompt('Qual seu nome?');
let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    if (palpite == numeroSecreto) {
    alert(`Certa resposta ${nome}, agora pode jogar na loteria!`);
}
while(palpite != numeroSecreto) {

    if (palpite > numeroSecreto) {
        alert(`Errou... o número secreto é menor que ${palpite}, tente novamente!`);
        let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    }
    if (palpite < numeroSecreto) {
        alert(`Errou..., o número secreto é maior que ${palpite}, tente novamente!`);
        let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    }
    alert('Quantidade de tentativas: ' + quantidadeTentativas++)
}

let numeroSecreto = 7;
let quantidadeTentativas = 1;
let nome = prompt('Qual seu nome?');
let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    if (palpite == numeroSecreto) {
    alert(`Certa resposta ${nome}, agora pode jogar na loteria!`);
}
    if (palpite > numeroSecreto) {
        alert(`Errou... o número secreto é menor que ${palpite}, tente novamente!`);
        let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    }
    if (palpite < numeroSecreto) {
        alert(`Errou..., o número secreto é maior que ${palpite}, tente novamente!`);
        let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    }
    alert('Quantidade de tentativas: ' + quantidadeTentativas++)

var numeroSecreto = parseInt(Math.random() * 1001 + 1)
var quantidadeTentativas = 1
var jogador = prompt('Qual é o seu nome?')
while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 1 e 1000')
  if (chute == numeroSecreto) {
    alert('Certa resposta ' + jogador + ', agora pode tentar a sorte na Mega Sena! Volte sempre e me deixem críticas contrutivas, obrigado!')
  } else if (chute > numeroSecreto) {
    alert('Errou... o número secreto é menor do que ' + chute + ', tente novamente!')
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior do que ' + chute + ', tente novamente!')
  }
  alert('Quantidade de tentaivas: '+ quantidadeTentativas++)
}