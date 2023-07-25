function validar (valor) {
    const numero = +valor;

    if (Number.isNaN(numero)) {
        elementoValor.innerHTML += '<div>Escolha um número.</div>';
        return;
    } 
    
    if (numero > maiorValor) {
        elementoValor.innerHTML += `<div>Número muito alto. Tente um valor até ${maiorValor}.</div>`; 
        return;
    } else if (numero < menorValor) {
        elementoValor.innerHTML += `<div>Número muito baixo. Tente um valor a partir de ${menorValor}.</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou!!!</h2>
            <h3>O número secreto é:</h3>
            <h4>${valor}</h4>
            <button id="reiniciar-jogo" class="reiniciar">Jogar novamente</button>
        `;
    } else if (numero < numeroSecreto) {
        elementoValor.innerHTML += `<div class="resposta">O número secreto é maior 
                                    &nbsp&nbsp<i class="fa-sharp fa-solid fa-angles-up 
                                    fa-bounce"></i></div>`;
    } else if (numero > numeroSecreto) {
        elementoValor.innerHTML += `<div class="resposta">O número secreto é menor 
                                    &nbsp&nbsp<i class="fa-sharp fa-solid fa-angles-down 
                                    fa-bounce"></i></div>`;
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'reiniciar-jogo') {
        window.location.reload();
    }
});