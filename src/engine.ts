
import { Jogador, Guerreiro, Bardo, Mago, Ladrao } from './Playerclass';

import{criarListaDeInimigo}from './inimigo'

import { criarListaDeItens } from './itens';


export function Randon_numero (menor:number, maior:number): number {
    return Math.floor(Math.random()*(maior - menor + 1)) + menor;
}
const jogador1 = new Jogador("Thurigo", 100, 50);

console.log(jogador1);
