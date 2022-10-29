/*
AULA 3 - Herança, polimorfismos e composição
3.1 - Extendendo classes
PROBLEMA
- Como fazer com que uma classe tenha propriedades de outra classe além das propriedades específicas dela?
SOLUÇÃO
- criar a classe Mago
- usar extends
- usar super
- instanciar um novo Mago
TEORIA
- extends e super
*/

import { Mago } from "./modules/mago.js"

const magoJack = new Mago('Jack', 7, 'fogo', 10, 10)

// Mostrar propriedades herdadas pelo Personagem e as novas criadas pelo Mago
console.log(magoJack)

//herdou o metodo tambem
console.log(magoJack.obterInsignia())