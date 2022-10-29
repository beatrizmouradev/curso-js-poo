/*
AULA 5 - Private e encapsulamento

5.1 - Propriedades privadas
PROBLEMA: O level está desprotegido, qualquer pessoa pode reatribuir qualquer valor por fora da classe que esta fora da regra de negocio. Como evitar isso?
SOLUÇÃO:
- Adicionei na sintaxe a #
- Criação do set
TEORIA
- Regra 1 - Não consegur ter acesso externo
- Regra 2 - Necessidade de declarar a propriedade privada fora do construtor


- Obs: Talvez esse video seja quebrado em 2 partes, a primeira "Propriedades privadas" e a segunda "Setter"
*/

import { Arqueiro } from "./modules/arqueiro.js"
import { Mago } from "./modules/mago.js"
import { Personagem } from "./modules/personagem.js"


const arqueiroLess = new Arqueiro('Less', 3)

//vai ser na pagina clicando nos botoes
arqueiroLess.aumentarLevel() // level 2
arqueiroLess.aumentarLevel() // level 3
arqueiroLess.aumentarLevel() // level 4
arqueiroLess.aumentarLevel() // level 5
arqueiroLess.aumentarLevel() // level 6
arqueiroLess.aumentarLevel() // level 7
arqueiroLess.aumentarLevel() // level 8
arqueiroLess.aumentarLevel() // level 9
arqueiroLess.aumentarLevel() // level 10

console.log('arqueiroLess ->', arqueiroLess)

arqueiroLess.aumentarLevel() // level 11 - O set mantém o #nivel em 10

console.log('arqueiroLess ->', arqueiroLess)

// undefined pois level não é mais uma variável e sim uma chamada para set level (ou, uma função de escrita)
console.log(arqueiroLess.level)

const magoJhon = new Mago('Jhon', 'fogo', 3, 4);

// Porque vai dar empate abaixo?
// Porque ao tentar acessar personagem1.level ou personagem2.level irá retornar undefined
// E undefined === undefined
console.log(Personagem.verificarVencedor(arqueiroLess, magoJhon))

console.log(arqueiroLess.obterInsignia()) // Deveria vir Arqueiro Implacável, veio Arqueiro iniciante, por que? Video 5.2 (Getter)

