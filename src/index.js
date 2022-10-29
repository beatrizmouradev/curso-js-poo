/*
AULA 3 - Herança, polimorfismos e composição
3.1 - Extendendo classes
3.2 - Sobrescrevendo métodos
3.3 - Composição
CONTEXTO: após o 3.2, pedir a construção da classe Arqueiro em um desafio
PROBLEMA
- Como ter uma classe que tenha caracteristicas de mais de uma classe? Ex: um arqueiro que usa arco e flecha mas com o elemento mágico fogo
SOLUÇÃO
- instancia a partir da classe Mago
- instancia a partir da classe Arqueiro
- modificar a propriedade do combate do arqueiro mágico, unindo informações de Mago e Arqueiro
TEORIA
- explicar composição
*/

import { ArqueiroMago } from "./modules/arqueiro-mago.js"

//Valor esperado: Arqueiro iniciante e Mago iniciante
console.log(new ArqueiroMago('Joaguim', 4, 4, 'fogo', 4, 4).obterInsignia())

//Valor esperado: Implacavel Arqueiro e Implacavel Mago
console.log(new ArqueiroMago('Joaguim', 10, 4, 'fogo', 4, 10).obterInsignia())

//Valor esperado: Implacavel Arqueiro e Mestre do fogo
console.log(new ArqueiroMago('Joaguim', 10, 4, 'fogo', 5, 10).obterInsignia())

//Valor esperado: Dominador de flechas e Implacavel Mago
console.log(new ArqueiroMago('Joaguim', 10, 6, 'fogo', 4, 10).obterInsignia())

//Valor esperado: Dominador de flechas e Mestre do fogo
console.log(new ArqueiroMago('Joaguim', 10, 6, 'fogo', 5, 10).obterInsignia())
