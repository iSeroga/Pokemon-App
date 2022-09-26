import PokemonList from "../components/PokemoList/PokemonList.js";

export class PokemonService {

    async getAll(offset = 0) {
        const { results } = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`).then(res => res.json());
        return await new PokemonList(results).render();
    }
}

export default new PokemonService();