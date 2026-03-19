function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    
    if (document.getElementById("num1").value === "" || document.getElementById("num2").value === "" || document.getElementById("num3").value === "") {
        alert("Por favor, preencha os tres campos!");
        return;
    }
    let media = (n1 + n2 + n3) / 3

    let resultado = "";
    
    if (media >= 7) {
    resultado = "Aprovado ✅";
  } else {
    resultado = "Reprovado ❌";
  }

  document.getElementById("resultado").innerText =
    "Média: " + media.toFixed(2) + " - " + resultado;
}