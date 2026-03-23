document.getElementById('quantidade').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') calcular();
});

function calcular() {
  const input     = document.getElementById('quantidade');
  const resultado = document.getElementById('resultado');
  const erroDiv   = document.getElementById('erro');

  resultado.classList.remove('visivel');
  erroDiv.classList.remove('visivel');

  const qtd = parseInt(input.value);

  if (isNaN(qtd) || qtd < 1) {
    erroDiv.classList.add('visivel');
    return;
  }

  const precoUnit = qtd >= 12 ? 1.00 : 1.30;
  const total     = qtd * precoUnit;
  const atacado   = qtd >= 12;

  const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  document.getElementById('res-qtd').textContent   = qtd + (qtd === 1 ? ' maçã' : ' maçãs');
  document.getElementById('res-preco').textContent = fmt(precoUnit) + ' / un.';
  document.getElementById('res-total').textContent = fmt(total);

  const badge = document.getElementById('res-badge');
  badge.innerHTML = atacado
    ? '<span class="badge-tipo badge-atacado">✔ Desconto atacado aplicado</span>'
    : '<span class="badge-tipo badge-varejo">Preço varejo (compre 12+ para desconto)</span>';

  resultado.classList.add('visivel');
}