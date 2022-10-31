import { Personagem } from '../modules/personagem.js'
import renderizarPersonagem from "./personagem.js"

/**
 * Recebe uma lista de personagens e uma lista de personagens selecionados
 * Adiciona na ul de personagens uma nova li com o personagem
 *
 * @param {Personagem[]} todosPersonagens
 * @param {Personagem[]} selecionados
 */
export default function renderizarPersonagens(todosPersonagens, selecionados) {
    const listaPersonagens = document.querySelector('ul#personagens')
    // A gente limpa a lista sempre que for renderizar e o laço rodar
    listaPersonagens.innerHTML = ''

    /*
    * 1. para cada personagem da lista de todos os personagens, verifica se ele tem um index válido
    * na lista de personagens selecionados
    * 2. chama a renderizarPersonagem() salvando o seu retorno e personagemLi e apendendo como filho da lista do HTML
    */
    for (const personagem of todosPersonagens) {
        const estaSelecionado = selecionados.indexOf(personagem) !== -1 //sintaxe para quando encontra no array
        const personagemLI = renderizarPersonagem(personagem, estaSelecionado)
        listaPersonagens.appendChild(personagemLI)
    }
}

