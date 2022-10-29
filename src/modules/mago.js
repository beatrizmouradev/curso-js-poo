import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia

    constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level, 'Mago')
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia =  inteligencia
    }
}