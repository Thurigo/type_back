"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Playerclass_1 = require("../src/Playerclass");
//import { Randon_numero } from '../src/engine';
describe('Teste classe player', () => {
    test('Test Class Do Jogadora', () => {
        const resultado = new Playerclass_1.JogadorClasse("Thurigo", 50, 50, new Playerclass_1.Guerreiro);
        expect(resultado.vida).toBe(50);
    });
});
//# sourceMappingURL=player_classe.spec.js.map