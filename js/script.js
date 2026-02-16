//Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  url.includes;
  if (url.includes(href)) {
    console.log(link);
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const paramentros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

paramentros.forEach(ativarProduto);
