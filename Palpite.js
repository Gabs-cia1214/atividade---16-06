let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let acertou = false;

function verificarPalpite() {
    let mensagem = document.getElementById("mensagem");

    do {
        let palpite = parseInt(document.getElementById("palpite").value);
        tentativas++;

        if (palpite === numeroSecreto) {
            mensagem.textContent = "Parabéns! Você acertou em " + tentativas + " tentativa(s).";
            acertou = true;
        } else {
            mensagem.textContent = "Errou! Tentativa " + tentativas + ". Tente novamente.";
        }
    } while (false);
}



