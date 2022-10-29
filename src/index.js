/*
AULA 3 - Herança, polimorfismos e composição
3.1 - Extendendo classes
3.2 - Sobrescrevendo métodos
PROBLEMA
- Como fazer para modificar um método herdado?
SOLUÇÃO
- Sobreescrição do método obterInsignia herdado de Personagem em Mago
TEORIA
- explicar polimorfismo
*/

import { Mago } from "./modules/mago.js"

const magoJack = new Mago('Jack', 7, 'fogo', 10, 10)

// Mostrar propriedades herdadas pelo Personagem e as novas criadas pelo Mago
console.log(magoJack)

// Sobreescreveu o método obterInsignia. Valor esperado: Super Mago de fogo
console.log(magoJack.obterInsignia())

const magoPotter = new Mago('Potter', 7, 'fogo', 3, 4)

// Valor esperado: Implacavel Mago (aqui caiu na lógica que não sobreescreve)
console.log(magoPotter.obterInsignia())