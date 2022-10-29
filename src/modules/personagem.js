export class Personagem {
    nome
    level
    tipo
    // Nao preenchidas por parametro do constructor
    vida
    mana

    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
    }

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${ this.tipo }`
        }
        return `${ this.tipo } iniciante`
    }
}