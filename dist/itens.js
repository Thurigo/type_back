"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarListaDeItens = void 0;
const randon_number_1 = require("./randon_number");
class Itens {
    constructor(gold, nome, forca, agilidade, carisma, defesa, sorte, vida) {
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
function criarListaDeItens(numeroDeItens) {
    const listaDeItens = [];
    const nomes = ["1", "2", "3", "4", "5", "6", "7", "8"];
    for (let i = 0; i < numeroDeItens; i++) {
        const nome = nomes[i % nomes.length];
        const vida = (0, randon_number_1.Randon_numero)(1, 20);
        const forca = (0, randon_number_1.Randon_numero)(1, 20);
        const agilidade = (0, randon_number_1.Randon_numero)(1, 20);
        const carisma = (0, randon_number_1.Randon_numero)(1, 20);
        const defesa = (0, randon_number_1.Randon_numero)(1, 20);
        const sorte = (0, randon_number_1.Randon_numero)(1, 20);
        const gold = (0, randon_number_1.Randon_numero)(1, 20);
        const iten = new Itens(gold, nome, sorte, vida, forca, agilidade, carisma, defesa);
        listaDeItens.push(iten);
    }
    return listaDeItens;
}
exports.criarListaDeItens = criarListaDeItens;
const listaDeItens = criarListaDeItens(8);
console.log(listaDeItens);
//# sourceMappingURL=itens.js.map