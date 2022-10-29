/*
AULA 1 - CLASSES
1.1 - apresentação
1.2 - mostrar projeto base

1.3 - Quando Classes são necessárias?
PROBLEMA
- Repetição do código toda vez que quiser criar mais um objeto
- Objeto é estático, para criar novas propriedades tem que criar e colocar em todos os objetos 1 a 1
- Grande margem para erros de escrita
SOLUÇÃO
- Criar uma classe simples e instanciar
TEORIA
- O que é uma classe e sua sintaxe
- Como criar uma instância dessa classe
- Com um único modelo pronto, podem existir diversos objetos a partir dele.
*/

/*const personagemJack = {
    nome: 'Jack',
    vida: 9,
    mana: 10,
    level: 8,
    tipo: 'Guerreiro',
    }*/

const personagemJhey = {
    nome: 'Jhey',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

//repetição constante da escrita das propriedades
const personagemLess = {
    nome: 'Less',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

class Personagem {
    nome
    vida
    mana
    //adicionar mais uma propriedade depois
    level
    tipo
}

const personagemJack = new Personagem()

personagemJack.nome = 'Jack'
personagemJack.vida = 9
personagemJack.mana = 10

//mostrar que por ser uma instância ele passa a ter acesso a essa propriedade de forma automática
personagemJack.tipo = 'Guerreiro'

console.log(personagemJack)



