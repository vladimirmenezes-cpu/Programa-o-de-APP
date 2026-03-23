function verificarAposentadoria() {
    // Pegando os valores dos inputs
    const matricula = document.getElementById('matricula').value;
    const anoNasc = parseInt(document.getElementById('anoNasc').value);
    const tempoTrab = parseInt(document.getElementById('tempoTrab').value);
    const resultadoDiv = document.getElementById('resultado');

    // Cálculo da idade baseada no ano atual
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNasc;

    // Lógica principal
    let mensagem = "";
    let classeStatus = "";

    if (idade >= 65 || tempoTrab >= 30) {
        mensagem = "Requerer aposentadoria";
        classeStatus = "status-ok";
    } else {
        mensagem = "Não requerer aposentadoria";
        classeStatus = "status-no";
    }

    // Exibindo o resultado na tela
    resultadoDiv.style.display = "block";
    resultadoDiv.className = "result-box " + classeStatus;
    resultadoDiv.innerHTML = `
        <strong>Código:</strong> ${matricula} <br>
        <strong>Idade:</strong> ${idade} anos <br>
        <strong>Tempo de Trabalho:</strong> ${tempoTrab} anos <br>
        <hr>
        <strong>Status:</strong> ${mensagem}
    `;
}