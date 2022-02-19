export class PokemonDetail {
    id: number;
    order: number;
    name: string;
    height: number;
    abilities: Ability[];
    spices: Species;
    types: Type[];
    weight: number;
    sprites: Sprite;
    stats: Stat[];

    constructor() {
        this.abilities  = [];
        this.types = [];
    }
}