/*
========================================
OBJETIVO
========================================

Quando o usuário clicar em um personagem:

1. Destacar o botão clicado.
2. Exibir o personagem correspondente.

========================================
ELEMENTOS DA PÁGINA
========================================
*/

// Lista de botões dos personagens
const botoes = document.querySelectorAll(".botao");

// Lista de personagens
const personagens = document.querySelectorAll(".personagem");

/*
========================================
EVENTOS
========================================
*/

// Adiciona evento de clique para cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        trocarPersonagem(botao, indice);
    });
});

/*
========================================
FLUXO PRINCIPAL
========================================
*/

/**
 * Executa todas as ações necessárias
 * ao trocar de personagem
 */
function trocarPersonagem(botao, indice) {
    atualizarBotaoSelecionado(botao);

    atualizarPersonagemSelecionado(indice);
}

/*
========================================
BOTÕES
========================================
*/

/**
 * Remove a seleção atual e seleciona
 * o botão clicado
 */
function atualizarBotaoSelecionado(botao) {
    const botaoSelecionado = document.querySelector(".botao.selecionado");

    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");
}

/*
========================================
PERSONAGENS
========================================
*/

/**
 * Remove o personagem atual e exibe
 * o personagem correspondente ao botão
 */
function atualizarPersonagemSelecionado(indice) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");

    personagens[indice].classList.add("selecionado");
}