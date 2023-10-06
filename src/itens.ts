
import { Randon_numero } from "./randon_number"


export class Itens {
    vida: number;
    gold:number;
    nome: string;
    forca: number;
    agilidade: number;
    carisma: number;
    defesa: number;
    sorte: number;

    constructor(gold:number ,nome: string, forca: number, agilidade: number, carisma: number, defesa: number, sorte: number, vida:number) {


        this.nome = nome;
        this.vida = vida;
        this.gold = gold;
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
    }
}

export function criarListaDeItens(numeroDeItens: number): Itens[] {
    const listaDeItens: Itens[] = [];
    const nomes = ["1", "2", "3", "4", "5", "6", "7", "8"];
    for (let i = 0; i < numeroDeItens; i++) {
        const nome = nomes[i % nomes.length];
        const vida = Randon_numero(1, 1);
        const forca = Randon_numero(1, 1);
        const agilidade = Randon_numero(1, 1);
        const carisma = Randon_numero(1, 1);
        const defesa = Randon_numero(1, 1);
        const sorte = Randon_numero(1, 1);
        const gold = Randon_numero(1, 1);
        const iten = new Itens(gold,nome, sorte, vida, forca, agilidade, carisma, defesa, );
        listaDeItens.push(iten);
    }
    return listaDeItens;
}
