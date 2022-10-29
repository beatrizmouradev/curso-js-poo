/*
AULA 4 - Static
4.1 - Propriedades estáticas
4.2 - Métodos estáticos
PROBLEMA
- Como lidar com métodos que recebem dados que não dependendem do contexto do this?
SOLUÇÃO
- Criar um método estático na classe Personagem
- Utilizar esse método em uma subclasse para um outro contexto
TEORIA
- Como definir uma método estatico
- O que são metodos utilitarios
- Como ela pode e como não pode ser chamada no console
- Quando utilizar
*/

import { Personagem } from "./modules/personagem.js"
import { Mago } from "./modules/mago.js"

const magoJack = new Mago('Jack', 10, 'fogo', 10, 10)
const magoPotter = new Mago('Potter', 9, 'fogo', 9, 4)

console.log(Personagem.verificarVencedor(magoJack, magoPotter))
