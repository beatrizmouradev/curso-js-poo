/*
AULA 5 - Private e encapsulamento
5.1 - Propriedades privadas
5.2 - Getters
PROBLEMA: Como fazer para acessarmos #nivel por fora da classe ou em uma sub-classe (Guerreiro)?
SOLUÇÃO:
- Criar getter para #nivel (get level)
TEORIA
- Getter
*/

import { Arqueiro } from "./modules/arqueiro.js"
import { Guerreiro } from "./modules/guerreiro.js"
import { Mago } from "./modules/mago.js"
import { Personagem } from "./modules/personagem.js"

const arqueiroLess = new Arqueiro('Less', 3)

console.log('arqueiroLess ->', arqueiroLess)

// Agora funciona acessar o level (getter para #nivel) fora da classe
console.log('arqueiroLess.level antes', arqueiroLess.level)

arqueiroLess.aumentarLevel()
arqueiroLess.aumentarLevel()

console.log('arqueiroLess.level depois', arqueiroLess.level)

const magoJhon = new Mago('Jhon', 'fogo', 3, 4);

// Agora funciona verificar o vencedor porque Personagem.verificarVencedor consegue acessar level (getter para #nivel)
console.log(Personagem.verificarVencedor(arqueiroLess, magoJhon))

arqueiroLess.level = 999

// Será que ele deixa aumentar para um level absurdo???????????? O.O
console.log(arqueiroLess.level)


//// Guerreiro

/* Antes de criar o get level
 * Por padrão o undefined cai na lógica do "else" em Personagem.obterInsignia()

const guerreiroKarl = new Guerreiro('Karl', 7)
guerreiroKarl.level = 8

console.log(guerreiroKarl.obterInsignia()) // Esperado -> Guerreiro iniciante
*/

// Após criar o get level
const guerreiroKarl = new Guerreiro('Karl', 7)
guerreiroKarl.level = 8

console.log(guerreiroKarl.obterInsignia()) // Esperado -> Guerreiro furioso
