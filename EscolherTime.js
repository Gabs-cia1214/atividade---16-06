function mostra(){
    let opcao = parseInt(document.getElementById("seleção").value);
    let texto = "";

    switch (opcao) {
        case 1:
            texto = "Você torce para o Brasil!";
            break;
            case 2: 
            texto = "Você torce para o Paraguai!";
            break;
            case 3:
            texto = "Você torce para a Argentina!";
            break;
        default:
            texto = "Opção inválida. Escolha 1,2 ou 3.";

    }
    document.getElementById("mensagem").textContent = texto;
}
