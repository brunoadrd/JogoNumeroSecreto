const menorValor = 1;
const maiorValor = 1000;
const elementoMenor = document.getElementById('menor-valor');
const elementoMaior = document.getElementById('maior-valor');

const numeroSecreto = gerarDado();

console.log(numeroSecreto)

function gerarDado () {
    return parseInt(Math.random() * (maiorValor - menorValor) + menorValor + 1);
}

elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;