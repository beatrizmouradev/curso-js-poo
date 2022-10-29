import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMagico

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome, level, 'Arqueiro Mago');
        this.ladoArqueiro = new Arqueiro(nome, level, destreza);
        this.ladoMagico = new Mago(nome, level, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${ this.ladoArqueiro.obterInsignia() } e ${ this.ladoMagico.obterInsignia() }`
    }
}