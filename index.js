import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
const inputItem = document.getElementById("input-item");



botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista(evento);
    listaDeCompras.appendChild(itemDaLista);
    inputItem.value = ""; // Limpa o campo após adicionar

    verificarListaVazia(); // Atualiza a visibilidade da mensagem
});

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

// Executa verificação ao carregar
verificarListaVazia();
