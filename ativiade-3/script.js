function calcular() {
    let v1 = document.getElementById("n1").value;
    let v2 = document.getElementById("n2").value;
    let v3 = document.getElementById("n3").value;

    if (v1 === "" || v2 === "" || v3 === "") {
        alert("Preencha os três campos!");
        return;
    }

    let n1 = Number(v1);
    let n2 = Number(v2);
    let n3 = Number(v3);

    let media = (n1 + n2 + n3) / 3;

    document.getElementById("mediaVal").textContent = media.toFixed(2);

    let badge = document.getElementById("badge");

    if (media >= 7) {
        badge.textContent = "Aprovado";
        badge.className = "badge aprovado";
    } else {
        badge.textContent = "Reprovado";
        badge.className = "badge reprovado";
    }

    document.getElementById("resultados").style.display = "flex";
}