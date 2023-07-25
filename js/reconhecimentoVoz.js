const elementoValor = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function exibeValor (valor) {
    elementoValor.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${valor}</span>
    `
}

function onSpeak (e) {
    valor = e.results[0][0].transcript;
    exibeValor (valor);
    validar(valor);
}

recognition.addEventListener('end', () => recognition.start());