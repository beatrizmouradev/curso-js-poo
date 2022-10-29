import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro'
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'

    forca

    constructor(nome, forca) {
        super(nome);
        this.forca = forca
    }

    // Acessando o #nivel pelo getter level
    obterInsignia() {
        if (this.level >= 7 && this.forca >= 5)
            return `Guerreiro furioso`

        return super.obterInsignia();
    }
}