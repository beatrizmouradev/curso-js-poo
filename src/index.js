/*
AULA 4 - Static
4.1 - Propriedades estáticas
PROBLEMA
- Como lidar com propriedades que possuem dados que não dependendem do contexto do this?
SOLUÇÃO
- Adicionar a sintaxe static para as propriedades com dados imútaveis e removê-las do constructor
- Substituição do this pelo nome da classe
- Uso do this.constructor

TEORIA
- Como definir uma propriedade estatica
- Como ela pode e como não pode ser chamada
- Explicar como ela não depende do contexto do this e explicar que ela é estática, mas não protegida
- Quando utilizar
*/

import {
    Arqueiro
} from "./modules/arqueiro.js"

// Como acessar variável estática
console.log(Arqueiro.tipo)
// Ou:
console.log(new Arqueiro().constructor.tipo)

// Antes de acrescentar this.constructor.tipo . Valor esperado: undefined iniciante
console.log(new Arqueiro().obterInsignia())

// Depois de acrescentar this.constructor.tipo . Valor esperado: Arqueiro iniciante
console.log(new Arqueiro().obterInsignia())
