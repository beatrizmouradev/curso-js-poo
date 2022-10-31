import renderizarPersonagens from "./components/lista-personagem.js"
import { mostrarModal } from "./components/modal.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { Guerreiro } from "./modules/guerreiro.js"
import { Mago } from "./modules/mago.js"
import { Personagem } from "./modules/personagem.js"

const arqueiroLess = new Arqueiro('Less', 5)
const magoPotter = new Mago('Potter', 'fogo', 10, 10)
const guerreiroKarl = new Guerreiro('Karl', 9)
const arqueiroMagoLudi = new ArqueiroMago('Ludi', '7', 'fogo', 7, 6)
const guerreiroGeorge = new Guerreiro('George', 9)
const magoJhon = new Mago('Jhon', 'agua', 5, 8)

//adicionando as instancias em um array chamado personagens
const personagens = [magoPotter, arqueiroLess, guerreiroKarl, arqueiroMagoLudi, guerreiroGeorge, magoJhon]

//array de personagens selecionados vazio
const personagensSelecionados = []

//envio para renderizarPersonagens uma lista de personagens e uma lista de personagens selecionados
renderizarPersonagens(personagens, personagensSelecionados)

//Quando ocorre o evento customizado de clique para aumentar ou diminuir level
document.addEventListener('renderizar-personagens', () =>
    renderizarPersonagens(personagens, personagensSelecionados)
)

//Quando ocorre o evento customizado de remover selecao do personagem
document.addEventListener('remover-selecao-personagem', (event) => {
    const personagemSelecionado = event.detail

    //esta buscando saber se o index é 0 ou 1 (únicos permitidos)
    const indexDoPersonagemNoArray = personagensSelecionados.indexOf(personagemSelecionado)

    personagensSelecionados.splice(indexDoPersonagemNoArray, 1)
    renderizarPersonagens(personagens, personagensSelecionados)
})

//Quando ocorre o evento customizado adicionar selecao do personagem
document.addEventListener('adicionar-selecao-personagem', (event) => {
    const personagemSelecionado = event.detail

    personagensSelecionados.push(personagemSelecionado)
    renderizarPersonagens(personagens, personagensSelecionados)
})

const botaoDuelar = document.querySelector('.botao-duelar')

/**
 * logica de disparar o modal com o clique no botao duelar
 */
botaoDuelar.addEventListener('click', () => {
    if (personagensSelecionados.length < 2) return mostrarModal('Selecione 2 personagens')

    const resultadoDuelo = Personagem.verificarVencedor(personagensSelecionados[0], personagensSelecionados[1])

    mostrarModal(resultadoDuelo)

    //apos mostrar o modal, remove todos os selecionados da lista
    personagensSelecionados.splice(0, personagensSelecionados.length)

    renderizarPersonagens(personagens, personagensSelecionados)
})