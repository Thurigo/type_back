
import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao } from './Playerclass';

import{criarListaDeInimigo}from './inimigo'

import { criarListaDeItens } from './itens';


console.log('cheguei')
 const jogadorGuerreiro = new JogadorClasse("Thurigo", 50, 50, new Guerreiro());

const jogadorBardo = new JogadorClasse("BardoMan", 80, 70, new Bardo());

const jogadorMago = new JogadorClasse("Magicus", 90, 60, new Mago());

const jogadorLadrao = new JogadorClasse("Sneaky", 120, 40, new Ladrao());


//console.log(jogadorGuerreiro);
console.log(jogadorBardo);
console.log(jogadorMago);
console.log(jogadorLadrao);