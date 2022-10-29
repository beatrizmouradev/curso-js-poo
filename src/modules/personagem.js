export class Personagem {
    static tipo
    static descricao

    nome
    level
    // Nao preenchidas por parametro do constructor
    vida
    mana

    constructor(nome, level) {
        this.nome = nome
        this.level = level
        this.vida = 100
        this.mana = 100
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${ this.constructor.tipo }`
        }
        return `${ this.constructor.tipo } iniciante`
    }
}