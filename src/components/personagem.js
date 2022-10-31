import {
    Personagem
} from "../modules/personagem.js";

/**
 * Recebe 1 personagem e se ele está ou não selecionado
 *
 * @param {Personagem} personagem
 * @param {boolean} estaSelecionado
 * @returns {HTMLLIElement}
 */
export default function renderizarPersonagem(personagem, estaSelecionado) {
    const personagemLI = document.createElement('li')
    personagemLI.classList.add('personagem', personagem.constructor.tipo)

    if (estaSelecionado) personagemLI.classList.add('selecionado')

    personagemLI.innerHTML = `
        <div class="container-superior">
            <div class="cabecalho">
                <div class="combate"></div>
                <div class="level">
                    <button class="diminuir-level">-</button>
                    <p class="level-texto">Level ${ personagem.level }</p>
                    <button class="aumentar-level">+</button>
                </div>
            </div>
            <div class="container-imagem">
                <div class="imagem"></div>
                <div class="container-tipo">
                    <h2 class="tipo">${ personagem.constructor.tipo }</h2>
                </div>
            </div>
            <div class="container-nome">
                <h3 class="nome">${ personagem.nome }</h3>
            </div>
            <div class="container-descricao">
                <p class="descricao">${ personagem.constructor.descricao }</p>
            </div>
        </div>
        <div class="container-inferior">
            <img src="./src/assets/img/icone-mana.png" class="icone-mana">
            <p class="insignia">${ personagem.obterInsignia() }</p>
            <img src="./src/assets/img/icone-vida.png" class="icone-vida">
            <h4 class="mana">${ personagem.mana }</h4>
            <h4 class="vida">${ personagem.vida }</h4>
        </div>
    `
    /**
     * Lógica de aumentar e diminuir level
     * Após o clique, ele para a propragação desse clique para não subir para outros elementos HTML da li
     * Chama a funcao de aumentarLevel() ou diminuirLevel() presente em Class Personagem
     * Dispacha um evento que chama a renderizarPersonagens(personagens, personagensSelecionados), para atualizar o level da li
     */
    const containerLevel = personagemLI.querySelector('.level')
    containerLevel.onclick = (evt) => {
        evt.stopPropagation()

        if (evt.target.classList.contains('diminuir-level')) personagem.diminuirLevel()

        if (evt.target.classList.contains('aumentar-level')) personagem.aumentarLevel()

        document.dispatchEvent(new CustomEvent('renderizar-personagens'))
    }

    //remover ou adicionar a classe selecionado
    const alternarSelecaoPersonagem = () => {
        const nomeEvento = estaSelecionado ? 'remover-selecao-personagem' : 'adicionar-selecao-personagem'
        const evento = new CustomEvent(nomeEvento, {
            detail: personagem
        })
        document.dispatchEvent(evento)
    }
    /**
     * Lógica que permite adicionar-selecao até 2 personagens e remover-selecao se ja estiver selecionado
     * E que chama a alternarSelecaoPersonagem() se estiver dentro das situacoes permitidas
     */
    personagemLI.onclick = () => {
        const jaTem2Selecionados = document.querySelectorAll('.personagem.selecionado').length === 2
        if (!jaTem2Selecionados || estaSelecionado) {
            personagemLI.classList.toggle('selecionado')
            alternarSelecaoPersonagem()
        }
    }

    return personagemLI
}