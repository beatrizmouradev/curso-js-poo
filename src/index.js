/*
AULA 2 - CONSTRUCTOR
2.1 - Construindo por parâmetro
PROBLEMA
- Por mais que já exista um modelo, ainda está sendo necessário instanciar o objeto e passar os valores 1 a 1 das propriedades toda vez
SOLUÇÃO
- adicionar constructor na classe
- aplicar o this
- adicionar algumas variáveis no parâmetro
TEORIA
- O que é um constructor
- Como o constructor agiliza o trabalho na hora de criar as instâncias
- Construtor por parâmetro
*/

import { Personagem } from "./modules/personagem.js"

const personagemJack = new Personagem('Jack', 8, 'Mago')

const personagemJhey = new Personagem('Jhey', 4, 'Arqueiro')

const personagemLess = new Personagem('Less', 3, 'Guerreiro')

console.log(personagemJack)

console.log(personagemJhey)

console.log(personagemLess)