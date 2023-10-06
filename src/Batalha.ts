
import { JogadorClasse, Guerreiro, Bardo, Mago, Ladrao } from './Playerclass';

import { criarListaDeInimigo, Inimigo } from './inimigo'


import { Randon_numero } from './randon_number';


export function DroparGold(sorte: number): number {
    let gold = 3;
    if (sorte > 1)
        gold += 1

    return gold
}

export function GoldAndar(Jogador: JogadorClasse): JogadorClasse {
    Jogador.gold += 5
    return Jogador
}

export function Fugir(Jogador: JogadorClasse, inimigo1: Inimigo): JogadorClasse {

    if (Jogador.classe && Jogador.classe.agilidade > inimigo1.agilidade) {
        return Jogador
    }
    else if ((Jogador.classe.defesa + Jogador.vida) < inimigo1.forca) {
        Jogador.vida -= (inimigo1.forca -= Jogador.classe.defesa)
    } else {
        Jogador.classe.defesa -= inimigo1.forca
    }

    return Jogador
}

export function Atacar(Jogador: JogadorClasse, inimigo1: Inimigo): JogadorClasse {

    if (Jogador.classe && Jogador.classe.forca > inimigo1.defesa) {
        console.log('aranha morta');
        Jogador.gold += DroparGold(Jogador.classe.sorte);
    } else if ((Jogador.classe.defesa + Jogador.vida) < inimigo1.forca) {
        Jogador.vida -= (inimigo1.forca -= Jogador.classe.defesa)
    } else {
        Jogador.classe.defesa -= inimigo1.forca
    }

    return Jogador
}


export function Papear(Jogador: JogadorClasse, inimigo1: Inimigo): JogadorClasse {

    if (Jogador.classe && Jogador.classe.carisma > inimigo1.carisma) {
        return Jogador
    }
    else if ((Jogador.classe.defesa + Jogador.vida) < inimigo1.forca) {
        Jogador.vida -= (inimigo1.forca -= Jogador.classe.defesa)
    } else {
        Jogador.classe.defesa -= inimigo1.forca
    }

    return Jogador
}

export function TentarSorte(Jogador: JogadorClasse, inimigo1: Inimigo): JogadorClasse {
    const dado = Randon_numero(1, 2);
    if (dado === 1) {
        if ((Jogador.classe.defesa + Jogador.vida) < inimigo1.forca) {
            Jogador.vida -= (inimigo1.forca -= Jogador.classe.defesa)
        } else {
            Jogador.classe.defesa -= inimigo1.forca
        }
    } else {
        Jogador.classe.sorte += 1;
    }


    return Jogador
}