"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorClasse = exports.Ladrao = exports.Mago = exports.Bardo = exports.Guerreiro = void 0;
const randon_number_1 = require("./randon_number");
class Jogador {
    constructor(nome, vida, gold) {
        this.nome = nome;
        this.vida = vida;
        this.gold = gold;
    }
}
class Classe {
    constructor(nome, forca, agilidade, carisma, defesa, sorte) {
        this.nome = nome;
        this.forca = forca;
        this.agilidade = agilidade;
        this.carisma = carisma;
        this.defesa = defesa;
        this.sorte = sorte;
    }
}
class ClasseBase extends Classe {
    constructor(nome) {
        const forca = (0, randon_number_1.Randon_numero)(1, 20);
        const agilidade = (0, randon_number_1.Randon_numero)(1, 20);
        const carisma = (0, randon_number_1.Randon_numero)(1, 20);
        const defesa = (0, randon_number_1.Randon_numero)(1, 20);
        const sorte = (0, randon_number_1.Randon_numero)(1, 20);
        super(nome, forca, agilidade, carisma, defesa, sorte);
    }
}
class Guerreiro extends ClasseBase {
    constructor() {
        super("Guerreiro");
    }
}
exports.Guerreiro = Guerreiro;
class Bardo extends ClasseBase {
    constructor() {
        super("Bardo");
    }
}
exports.Bardo = Bardo;
class Mago extends ClasseBase {
    constructor() {
        super("Mago");
    }
}
exports.Mago = Mago;
class Ladrao extends ClasseBase {
    constructor() {
        super("Ladrão");
    }
}
exports.Ladrao = Ladrao;
class JogadorClasse extends Jogador {
    constructor(nome, vida, gold, classe) {
        super(nome, vida, gold);
        this.classe = classe;
    }
}
exports.JogadorClasse = JogadorClasse;
//# sourceMappingURL=Playerclass.js.map