console.log('Hello World');

const number: number = 1;
console.log(number);

console.log('Hello World');

function Randon_numero (menor:number, maior:number): number {
    return Math.floor(Math.random()*(maior - menor + 1)) + menor;
}

class Jogador {
    nome: string;
    vida: number;
    gold: number;
    constructor(nome: string, vida: number, gold: number) {
        this.nome = nome;
        this.vida = vida;
        this.gold = gold;
    }
}




let vida: number; // Alterei "real" para "number" já que não há tipo "real" no TypeScript
let luta: boolean;
//let nome: string; // Alterei "caracter" para "string" para representar um texto
let dado: number, q: number, N: number, gold: number, tmp: number, esco: number; // Declaração múltipla de variáveis

// Valores para atribuir às variáveis "bardo", "gue", "mago", "ladrao"
let bardo: number[] = [0, 0, 0, 0, 0]; // Inicializa com valores padrão de 0
let gue: number[] = [0, 0, 0, 0, 0];
let mago: number[] = [0, 0, 0, 0, 0];
let ladrao: number[] = [0, 0, 0, 0, 0];

// Valores para atribuir às variáveis "goblin", "aranha", "bruno", "jose", "cloti", "edu", "dragao", "cleber"
let goblin: number[] = [0, 0, 0, 0, 0];
let aranha: number[] = [0, 0, 0, 0, 0];
let bruno: number[] = [0, 0, 0, 0, 0];
let jose: number[] = [0, 0, 0, 0, 0];
let cloti: number[] = [0, 0, 0, 0, 0];
let edu: number[] = [0, 0, 0, 0, 0];
let dragao: number[] = [0, 0, 0, 0, 0];
let cleber: number[] = [0, 0, 0, 0, 0];

let char: number[] = [0, 0, 0, 0, 0]; // Variável para os atributos do personagem

// Valores para atribuir às variáveis "iten1", "iten2", "iten3", "iten4", "iten5", "iten6", "iten7", "iten8"
let iten1: number[] = [0, 0, 0, 0, 0];
let iten2: number[] = [0, 0, 0, 0, 0];
let iten3: number[] = [0, 0, 0, 0, 0];
let iten4: number[] = [0, 0, 0, 0, 0];
let iten5: number[] = [0, 0, 0, 0, 0];
let iten6: number[] = [0, 0, 0, 0, 0];
let iten7: number[] = [0, 0, 0, 0, 0];
let iten8: number[] = [0, 0, 0, 0, 0];
