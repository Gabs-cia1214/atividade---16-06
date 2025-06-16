function avaliarAluno() {
    let nome = document.getElementById("nomeAluno").value;
    let nota1 = Number(document.getElementById("notaA").value);
    let nota2 = Number(document.getElementById("notaB").value);
    let media = (nota1 + nota2) / 2;

    let situacao = media >= 7 ? "Aprovado" : "Reprovado";

    document.getElementById("mensagemFinal").textContent =
        `Aluno: ${nome} | Média: ${media.toFixed(1)} | Situação: ${situacao}`;
}
