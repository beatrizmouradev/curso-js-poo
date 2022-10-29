import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
    static tipo = 'Mago'
    static descricao = 'Um mago é um ser elemental detentor de poderes místicos'

    elementoMagico
    levelMagico
    inteligencia

    constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia =  inteligencia
    }

    obterInsignia() {
        if (this.levelMagico >= 5 && this.inteligencia >= 5)
            return `Mestre do ${ this.elementoMagico }`

        return super.obterInsignia();
    }
}