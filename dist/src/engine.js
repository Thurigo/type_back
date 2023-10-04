"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Playerclass_1 = require("./Playerclass");
console.log('cheguei');
const jogadorGuerreiro = new Playerclass_1.JogadorClasse("Thurigo", 50, 50, new Playerclass_1.Guerreiro());
const jogadorBardo = new Playerclass_1.JogadorClasse("BardoMan", 80, 70, new Playerclass_1.Bardo());
const jogadorMago = new Playerclass_1.JogadorClasse("Magicus", 90, 60, new Playerclass_1.Mago());
const jogadorLadrao = new Playerclass_1.JogadorClasse("Sneaky", 120, 40, new Playerclass_1.Ladrao());
//console.log(jogadorGuerreiro);
console.log(jogadorBardo);
console.log(jogadorMago);
console.log(jogadorLadrao);
//# sourceMappingURL=engine.js.map