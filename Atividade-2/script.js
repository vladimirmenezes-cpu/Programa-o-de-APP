function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (document.getElementById("num1").value === "" || 
        document.getElementById("num2").value === "") {
        alert("Por favor, preencha os dois campos!");
        return;
    }

    let querMedia   = document.getElementById("chkMedia").checked;
    let querSoma    = document.getElementById("chkSoma").checked;
    let querProduto = document.getElementById("chkProduto").checked;
    let querMaior   = document.getElementById("chkMaior").checked;
    let querMenor   = document.getElementById("chkMenor").checked;

    if (!querMedia && !querSoma && !querProduto && !querMaior && !querMenor) {
        alert("Marque pelo menos um cálculo!");
        return;
    }

    let media   = (n1 + n2) / 2;
    let soma    = n1 + n2;
    let produto = n1 * n2;
    let maior   = Math.max(n1, n2);
    let menor   = Math.min(n1, n2);

    let html = "";

    if (querMedia)   html += `<p>📊 Média: <strong>${media}</strong></p>`;
    if (querSoma)    html += `<p>➕ Soma: <strong>${soma}</strong></p>`;
    if (querProduto) html += `<p>✖️ Produto: <strong>${produto}</strong></p>`;
    if (querMaior)   html += `<p>⬆️ Maior: <strong>${maior}</strong></p>`;
    if (querMenor)   html += `<p>⬇️ Menor: <strong>${menor}</strong></p>`;

    let div = document.getElementById("resultados");
    div.innerHTML = html;
    div.classList.remove("hidden");
}