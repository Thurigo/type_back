
export function Randon_numero (menor:number, maior:number): number {
    return Math.floor(Math.random()*(maior - menor + 1)) + menor;
}
