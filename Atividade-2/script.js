function calcular () {
    let n1 = Number(document.getElementById("num1").value)
    let n2 = Number(document.getElementById("num2").value)

    if (isNaN(n1) || isNaN(n2) || n1 === "" || n2 === "") {
        alert("Por favor, preencha os dois campos!");
        return;
    }

let soma = n1 + n2;
let media = (n1 + n2)/ 2;
let produto = n1 * n2;
let maior = Math.max(n1, n2);
let menor = Math.min(n1, n2);

let div = document.getElementById("resultados");

div.innerHTML = `
        <p>📊 Média: <strong>${media}</strong></p>
        <p>➕ Soma: <strong>${soma}</strong></p>
        <p>✖️ Produto: <strong>${produto}</strong></p>
        <p>⬆️ Maior: <strong>${maior}</strong></p>
        <p>⬇️ Menor: <strong>${menor}</strong></p>
    `;

    div.classList.remove("hidden");
}