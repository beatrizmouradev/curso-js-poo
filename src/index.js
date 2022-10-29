/*
AULA 1 - CLASSES
1.1 - apresentação
1.2 - mostrar projeto base
1.3 - Quando Classes são necessárias?

1.4 - This
PROBLEMA
- Evoluir o modelo de classe com outras propriedades e métodos
SOLUÇÃO
- Criar um arquivo só para a declaração da classe e outro para instanciar e manipular essa instância
- Adicionar o restante das propriedades
- Acrescentar um método
- criar mais uma instância
TEORIA
- Padrão na divisão dos arquivos
- Import e export
- this
*/

import { Personagem } from "./modules/personagem.js"

const personagemJack = new Personagem()
personagemJack.nome = 'Jack'
personagemJack.level = 4
personagemJack.tipo = 'Guerreiro'

console.log(personagemJack)

//explicar aplicação do this no contexto do pesonagemJack
console.log('Insignia de ' + personagemJack.nome + ': ' + personagemJack.obterInsignia())

const personagemJhey = new Personagem()

personagemJhey.nome = 'Jhey'
personagemJhey.level = 6
personagemJhey.tipo = 'Mago'

//mostrar novo contexto do this só que agora dentro de personagemJhey
console.log('Insignia de ' + personagemJhey.nome + ': ' + personagemJhey.obterInsignia())


