import Pokemon from '../Pokemon/Pokemon.js';

class PokemonList {
    constructor(results) {
        this.pokemonGang = results;
    }

    async render() {
        return`
        <div class="pokemon-list">${{...this.pokemonGang}}</div>
        `;
    }
}

export default PokemonList;