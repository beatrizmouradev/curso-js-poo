import { Personagem } from "../modules/personagem.js";
import { mostrarModal } from "./modal.js"

export class PersonagemView {

    personagens
    personagensSelecionados

    /**
     *
     * @param {HTMLUListElement} ulPersonagens
     * @param {Personagem[]} personagens
     */
    constructor(ulPersonagens, personagens) {
        this.ulPersonagens = ulPersonagens
        this.personagens = personagens
        this.personagensSelecionados = []
        this.escutarEventoDuelo()
    }

    /**
     * Recebe uma lista de personagens e uma lista de personagens selecionados
     * Adiciona na ul de personagens uma nova li com o personagem
     *
     */
    render() {
        // A gente limpa a lista sempre que for renderizar e o laço rodar
        this.ulPersonagens.innerHTML = ''
        this.personagens.forEach(personagem => {
            const personagemLI = this.criaPersonagem(personagem)
            this.ulPersonagens.appendChild(personagemLI)
        })
    }

    /**
     * Recebe 1 personagem e se ele está ou não selecionado
     *
     * @param {Personagem} personagem
     * @returns {HTMLLIElement}
     */
    criaPersonagem = (personagem) => {
        const personagemLI = document.createElement('li')
        personagemLI.classList.add('personagem', personagem.constructor.tipo)

        /*
         * 1. para cada personagem da lista de todos os personagens, verifica se ele tem um index válido
         * na lista de personagens selecionados
         * 2. chama a renderizarPersonagem() salvando o seu retorno e personagemLi e apendendo como filho da lista do HTML
         */
        const estaSelecionado = this.personagensSelecionados.indexOf(personagem) !== -1 //sintaxe para quando encontra no array

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

            this.render()
        }

        /**
         * Lógica que permite adicionar-selecao até 2 personagens e remover-selecao se ja estiver selecionado
         * E que chama a alternarSelecaoPersonagem() se estiver dentro das situacoes permitidas
         */
        personagemLI.onclick = () => {
            const jaTem2Selecionados = this.personagensSelecionados.length === 2
            if (!jaTem2Selecionados || estaSelecionado) {
                personagemLI.classList.toggle('selecionado')

                if (!estaSelecionado) return this.adicionaSelecao(personagem)

                this.removeSelecao(personagem)
            }
        }

        return personagemLI
    }

    /**
     *
     * @param {Personagem} personagem
     */
    adicionaSelecao = (personagem) => {
        this.personagensSelecionados.push(personagem)
        this.render()
    }

    /**
     *
     * @param {Personagem} personagem
     */
    removeSelecao = (personagem) => {
        //esta buscando saber se o index é 0 ou 1 (únicos permitidos)
        const indexDoPersonagemNoArray = this.personagensSelecionados.indexOf(personagem)
        this.personagensSelecionados.splice(indexDoPersonagemNoArray, 1)
        this.render()
    }

    escutarEventoDuelo() {
        const botaoDuelar = document.querySelector('.botao-duelar')

        /**
         * logica de disparar o modal com o clique no botao duelar
         */
        botaoDuelar.addEventListener('click', () => {
            if (this.personagensSelecionados.length < 2) return mostrarModal('Selecione 2 personagens')

            const resultadoDuelo = Personagem.verificarVencedor(this.personagensSelecionados[0], this.personagensSelecionados[1])

            mostrarModal(resultadoDuelo)

            //apos mostrar o modal, remove todos os selecionados da lista
            this.personagensSelecionados.splice(0, this.personagensSelecionados.length)

            this.render()
        })
    }
}