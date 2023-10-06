import { JogadorClasse } from "./Playerclass";
import { Itens } from "./itens";

export function Loja(Jogador: JogadorClasse, intens1 : Itens): JogadorClasse{
    Jogador.vida += intens1.vida
    Jogador.gold -= intens1.gold

    Jogador.classe.agilidade += intens1.agilidade
    Jogador.classe.carisma += intens1.carisma
    Jogador.classe.defesa += intens1.defesa
    Jogador.classe.forca += intens1.forca
    Jogador.classe.sorte += intens1.sorte

    return Jogador
}