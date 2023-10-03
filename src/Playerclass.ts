
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

class Classe extends Jogador {
    classe: string
    forca: number;
    agilidade: number;
    carisma: number;
    defesa: number;
    sorte: number;

    constructor(nome: string, vida: number, gold: number, forca: number, agilidade: number, carisma: number, defesa: number, sorte: number, classe: string) {
        super(nome, vida, gold);
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
        this.classe = classe;
    }
}

