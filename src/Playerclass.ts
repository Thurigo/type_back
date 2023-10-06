import { Randon_numero } from "./randon_number";




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

class ClasseBase extends Classe {
    constructor(nome: string) {
        const forca = Randon_numero(1,20);
        const agilidade = Randon_numero(1,20);
        const carisma = Randon_numero(1,20);
        const defesa = Randon_numero(1,20);
        const sorte = Randon_numero(1,20);
        super(nome, forca, agilidade, carisma, defesa, sorte);
    }
}

export class Guerreiro extends ClasseBase {
    constructor() {
        super("Guerreiro");
    }
}

export class Bardo extends ClasseBase {
    constructor() {
        super("Bardo");
    }
}

export class Mago extends ClasseBase {
    constructor() {
        super("Mago");
    }
}

export class Ladrao extends ClasseBase {
    constructor() {
        super("Ladrão");
    }
}

export class JogadorClasse extends Jogador {
    classe: ClasseBase;

    constructor(nome: string, vida: number, gold: number, classe: ClasseBase) {
        super(nome, vida, gold);
        this.classe = classe;
    }
}