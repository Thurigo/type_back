
import {Randon_numero} from "./randon_number";

export class Inimigo {
    
    vida: number;
    
    nome: string;
    forca: number;
    agilidade: number;
    carisma: number;
    defesa: number;
    sorte: number;
    
    
    constructor(nome: string, vida: number, forca: number, agilidade: number, carisma: number, defesa: number, sorte: number) {
        
        
        this.nome = nome;
        this.vida = vida;
        
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
        
    }
}

export function criarListaDeInimigo (numeroDeClasses: number): Inimigo[] {
    const listaDeinimigo: Inimigo[] = [];
    const nomes = ["Goblin", "Aranha", "Bruno", "Jose", "Cloti", "Edu", "Dragao", "Cleber"];

    for (let i = 0; i < numeroDeClasses; i++) {
        const nome = nomes[i % nomes.length];
        const vida = Randon_numero(1, 1);
        const forca = Randon_numero(1, 1);
        const agilidade = Randon_numero(1, 1);
        const carisma = Randon_numero(1, 1);
        const defesa = Randon_numero(1, 1);
        const sorte = Randon_numero(1, 1);

        const inimigo = new Inimigo(nome, vida, forca, agilidade, carisma, defesa, sorte);
        listaDeinimigo.push(inimigo);
    }

    return listaDeinimigo;
}
