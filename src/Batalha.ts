
import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao } from './Playerclass';

import { criarListaDeInimigo } from './inimigo'


import { Randon_numero } from './randon_number';


export function DroparGold(sorte: number): number {
    let gold = 3;
    if (sorte > 1)
        gold += 1

    return gold
}

export function Atacar(Jogador: JogadorClasse): JogadorClasse {

    const dado = Randon_numero(1, 3);
    const listaDeinimigo = criarListaDeInimigo(3);
    const inimigo1 = listaDeinimigo[dado];

    if (Jogador.classe.forca > inimigo1.defesa) {
        console.log('aranha morta');
        Jogador.gold += DroparGold(Jogador.classe.sorte);
    }else if ((Jogador.classe.defesa + Jogador.vida) < inimigo1.forca){
        Jogador.vida -= (inimigo1.forca -= Jogador.classe.defesa )
    }else {
        Jogador.classe.defesa -= inimigo1.forca
    }

    return Jogador
} 