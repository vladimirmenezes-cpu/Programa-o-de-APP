
function verificar() {

  var campo = document.getElementById("idade");
  var idade = Number(campo.value); 

  var caixa = document.getElementById("resultado");

  if (campo.value === "" || idade < 0 || idade > 120) {
    caixa.className = "nao-pode";
    caixa.style.display = "block";
    caixa.innerHTML = "<span class='emoji'>⚠️</span> Por favor, digite uma idade válida.";
    return; 
  }

 
  if (idade < 16) {
    caixa.className = "nao-pode";
    caixa.innerHTML =
      "<span class='emoji'>🚫</span>" +
      "Você tem <strong>" + idade + " anos</strong>.<br>" +
      "Menores de 16 anos <strong>não podem votar</strong>.";

  } else if (idade <= 17) {
    caixa.className = "opcional";
    caixa.innerHTML =
      "<span class='emoji'>🟡</span>" +
      "Você tem <strong>" + idade + " anos</strong>.<br>" +
      "Para você, o voto é <strong>opcional</strong>!";

  } else if (idade <= 65) {
    caixa.className = "obrigatorio";
    caixa.innerHTML =
      "<span class='emoji'>✅</span>" +
      "Você tem <strong>" + idade + " anos</strong>.<br>" +
      "Para você, o voto é <strong>obrigatório</strong>!";

  } else {
    caixa.className = "opcional";
    caixa.innerHTML =
      "<span class='emoji'>🟡</span>" +
      "Você tem <strong>" + idade + " anos</strong>.<br>" +
      "Acima de 65 anos, o voto é <strong>opcional</strong>!";
  }

  
  caixa.style.display = "block";
}

document.getElementById("idade").addEventListener("keydown", function(evento) {
  if (evento.key === "Enter") {
    verificar();
  }
});
