import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { Guerreiro } from "./modules/guerreiro.js"
import { Mago } from "./modules/mago.js"

const arqueiroLess = new Arqueiro('Less', 5)
const magoPotter = new Mago('Potter', 'fogo', 10, 10)
const guerreiroKarl = new Guerreiro('Karl', 9)
const arqueiroMagoLudi = new ArqueiroMago('Ludi', '7', 'fogo', 7, 6)
const guerreiroGeorge = new Guerreiro('George', 9)
const magoJhon = new Mago('Jhon', 'agua', 5, 8)

//adicionando as instancias em um array chamado personagens
const personagens = [magoPotter, arqueiroLess, guerreiroKarl, arqueiroMagoLudi, guerreiroGeorge, magoJhon]

//envio para renderizarPersonagens uma lista de personagens e uma lista de personagens selecionados
const ulPersonagens = document.querySelector('ul#personagens')

new PersonagemView(ulPersonagens, personagens)
    .render()