let numeroSecreto = 7;
let quantidadeTentativas = 1;
let nome = prompt('Qual seu nome?');
while(palpite != numeroSecreto) {
    let palpite = prompt(`${nome}, digite um número entre 1 e 10`);
    if (palpite == numeroSecreto) {
        alert(`Certa resposta ${nome}, agora pode jogar na loteria!`);
    }
    else if (palpite > numeroSecreto) {
        alert(`Errou... o número secreto é menor que ${palpite}, tente novamente!`);
    }
    else if (palpite < numeroSecreto) {
        alert(`Errou..., o número secreto é maior que ${palpite}, tente novamente!`);
    }
}

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