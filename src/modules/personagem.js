export class Personagem {
    nome
    vida
    mana
    level
    tipo

    obterInsignia() {
        if (this.level >= 5) {
            return `Implacavel ${ this.tipo }`
        }
        return `${ this.tipo } iniciante`
    }
}