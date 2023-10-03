
import {Randon_numero} from "./engine";


class Jogador {
    nome: string;
    vida: number;
    gold: number;
    
    constructor(nome: string, vida: number, gold: number) {
        this.nome = nome;
        this.vida = vida;
        this.gold = gold;
    }
}

class Classe {
    nome: string;
    forca: number;
    agilidade: number;
    carisma: number;
    defesa: number;
    sorte: number;
    
    constructor(nome: string, forca: number, agilidade: number, carisma: number, defesa: number, sorte: number) {
        this.nome = nome;
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
    }
}

class Guerreiro extends Classe {
    constructor() {
        const forca = Randon_numero(1, 20);
        const agilidade = Randon_numero(1, 20);
        const carisma = Randon_numero(1, 20);
        const defesa = Randon_numero(1, 20);
        const sorte = Randon_numero(1, 20);
        super("Guerreiro", forca, agilidade, carisma, defesa, sorte);
    }
}

class Bardo extends Classe {
    constructor() {
        const forca = Randon_numero(1, 20);
        const agilidade = Randon_numero(1, 20);
        const carisma = Randon_numero(1, 20);
        const defesa = Randon_numero(1, 20);
        const sorte = Randon_numero(1, 20);
        super("Bardo", forca, agilidade, carisma, defesa, sorte);;
    }
}

class Mago extends Classe {
    constructor() {
        const forca = Randon_numero(1, 20);
        const agilidade = Randon_numero(1, 20);
        const carisma = Randon_numero(1, 20);
        const defesa = Randon_numero(1, 20);
        const sorte = Randon_numero(1, 20);
        super("Mago", forca, agilidade, carisma, defesa, sorte);;
    }
}

class Ladrao extends Classe {
    constructor() {
        const forca = Randon_numero(1, 20);
        const agilidade = Randon_numero(1, 20);
        const carisma = Randon_numero(1, 20);
        const defesa = Randon_numero(1, 20);
        const sorte = Randon_numero(1, 20);
        super("Ladrão", forca, agilidade, carisma, defesa, sorte);;
    }
}

export { Jogador, Guerreiro, Bardo, Mago, Ladrao };
