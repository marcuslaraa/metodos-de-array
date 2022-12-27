let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
let btnOrdenarLivrosDisponiveis = document.getElementById(
  'btnLivrosDisponiveis'
);

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPrecos);
btnOrdenarLivrosDisponiveis.addEventListener('click', ordenarLivrosDisponiveis);

function ordenarLivrosPorPrecos() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOslivrosNatela(livrosOrdenados);
}

function ordenarLivrosDisponiveis() {
  let livrosDisponiveis = livros.sort((a, b) => b.quantidade - a.quantidade);
  exibirOslivrosNatela(livrosDisponiveis);
}
