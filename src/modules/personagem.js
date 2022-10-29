export class Personagem {
    static tipo
    static descricao

    nome
    // Encapsulei o nivel (antigo level)
    #nivel
    // Nao preenchidas por parametro do constructor
    vida
    mana

    constructor(nome) {
        this.nome = nome
        this.vida = 100
        this.mana = 100
        // Chamando a set level passando 1
        this.level = 1
    }

    // Regra para criar condicoes para um level protegido
    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) {
            this.#nivel = novoLevel
        }
        // Visualizar que o aumentar e diminuir level atua na variavel privada #nivel
        console.log('Level dentro da classe ===', this.#nivel)
    }

    // Chamando a set level passando this.#nivel + 1
    aumentarLevel() {
        this.level = this.#nivel + 1
    }

    // Chamando a set level passando this.#nivel - 1
    diminuirLevel() {
        this.level = this.#nivel - 1
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${ this.constructor.tipo }`
        }
        return `${ this.constructor.tipo } iniciante`
    }

    static verificarVencedor (personagem1, personagem2) {
        // undefined pois level não é mais uma variável e sim uma chamada para set level (ou, uma função de escrita)
        console.log('personagem1.level', personagem1.level)
        console.log('personagem2.level', personagem2.level)

        if (personagem1.level === personagem2.level) {
            return 'Empate!!!'
        }

        if (personagem1.level > personagem2.level) {
            return `${ personagem1.constructor.tipo } ${personagem1.nome} é o vencedor!`
        }

        return `${ personagem2.constructor.tipo } ${personagem2.nome} é o vencedor!`
    }
}