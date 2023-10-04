"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarListaDeInimigo = void 0;
const randon_number_1 = require("./randon_number");
class Inimigo {
    constructor(nome, vida, forca, agilidade, carisma, defesa, sorte) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
    }
}
function criarListaDeInimigo(numeroDeClasses) {
    const listaDeinimigo = [];
    const nomes = ["Goblin", "Aranha", "Bruno", "Jose", "Cloti", "Edu", "Dragao", "Cleber"];
    for (let i = 0; i < numeroDeClasses; i++) {
        const nome = nomes[i % nomes.length];
        const vida = (0, randon_number_1.Randon_numero)(1, 20);
        const forca = (0, randon_number_1.Randon_numero)(1, 20);
        const agilidade = (0, randon_number_1.Randon_numero)(1, 20);
        const carisma = (0, randon_number_1.Randon_numero)(1, 20);
        const defesa = (0, randon_number_1.Randon_numero)(1, 20);
        const sorte = (0, randon_number_1.Randon_numero)(1, 20);
        const inimigo = new Inimigo(nome, vida, forca, agilidade, carisma, defesa, sorte);
        listaDeinimigo.push(inimigo);
    }
    return listaDeinimigo;
}
exports.criarListaDeInimigo = criarListaDeInimigo;
//# sourceMappingURL=inimigo.js.map