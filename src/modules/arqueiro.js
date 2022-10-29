// Desafio apos video 3.2 - Criando uma classe, herança e aplicando polimorfismo
import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza

    constructor(nome, level, destreza) {
        super(nome, level, 'Arqueiro')
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5)
            return `Dominador de flechas`

        return super.obterInsignia()
    }
}