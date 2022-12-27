let livros = [];
const endPointdaAPI =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();
const elementoParaInserirLivros = document.getElementById('livros');
async function getBuscarLivrosDaAPI() {
  const res = await fetch(endPointdaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOslivrosNatela(livrosComDesconto);
}

function exibirOslivrosNatela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class = "livro_quantidade">Quantidade disponivel: ${
        livro.quantidade
      }</p>
      <p class="livro__preco" id="preco"> R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`;
  });
}
