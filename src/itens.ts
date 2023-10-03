
import { Randon_numero } from "./engine"


class Itens {
    vida: number;
    
    nome: string;
    forca: number;
    agilidade: number;
    carisma: number;
    defesa: number;
    sorte: number;

    constructor(nome: string, forca: number, agilidade: number, carisma: number, defesa: number, sorte: number, vida:number) {


        this.nome = nome;
        this.vida = vida;
        
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
    }
}

function criarListaDeItens(numeroDeItens: number): Itens[] {
    const listaDeItens: Itens[] = [];
    const nomes = ["1", "2", "3", "4", "5", "6", "7", "8"];

    for (let i = 0; i < numeroDeItens; i++) {
        const nome = nomes[i % nomes.length];
        const vida = Randon_numero(1, 20);
        const forca = Randon_numero(1, 20);
        const agilidade = Randon_numero(1, 20);
        const carisma = Randon_numero(1, 20);
        const defesa = Randon_numero(1, 20);
        const sorte = Randon_numero(1, 20);


        const iten = new Itens(nome, sorte, vida, forca, agilidade, carisma, defesa, );
        listaDeItens.push(iten);
    }



    return listaDeItens;
}


const listaDeItens = criarListaDeItens(8);
console.log(listaDeItens);