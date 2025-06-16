function calcularMedia() {
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2;

    document.getElementById("resultado").textContent =
        `Aluno: ${nome} | Nota 1: ${nota1} | Nota 2: ${nota2} | Média: ${media.toFixed(1)}`;
}
