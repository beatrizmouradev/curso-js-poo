/*
AULA 2 - CONSTRUCTOR
2.1 - Construtor por parâmetro

2.2 - Propriedades fora dos parâmetros
PROBLEMA
- E quando existem valores de determinadas propriedades que eu quero já definir no construtor e não pedir por parâmetro na hora de instanciar a classe?
SOLUÇÃO
- aplico o this nas propriedades que não são pedidas por parâmetro
- atribuo um valor
- verifico novamente o objeto no console
TEORIA
- Construtor sem parâmetro
*/

import { Personagem } from "./modules/personagem.js"

const personagemJack = new Personagem('Jack', 8, 'Mago')

const personagemJhey = new Personagem('Jhey', 4, 'Arqueiro')

const personagemLess = new Personagem('Less', 3, 'Guerreiro')

console.log(personagemJack)

console.log(personagemJhey)

console.log(personagemLess)