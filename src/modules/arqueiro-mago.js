import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago'
    static descricao = 'Detentor de lancas e flechas magicas'

    ladoArqueiro
    ladoMagico

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        this.ladoArqueiro = new Arqueiro(nome, destreza);
        this.ladoMagico = new Mago(nome, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${ this.ladoArqueiro.obterInsignia() } e ${ this.ladoMagico.obterInsignia() }`
    }
}