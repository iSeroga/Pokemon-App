import Pokemon from '../Pokemon/Pokemon.js';

class PokemonList {
	constructor(results) {
		this.pokemonGang = results;
	}

	// получаем покемонв
	async fetchPokemos() {
		const { pokemonGang } = this;

		return await Promise.all(
			pokemonGang.map(({ url }) => fetch(url).then(res => res.json()))
		);
	}


	// создает массив HTML кода покемонов
	async makePokemonList() {
		const data = await this.fetchPokemos();
		// data.map(console.log);
		return data.map(({ name, stats, sprites }) => {
			const pokemon = new Pokemon(name, stats, sprites);
			return pokemon.render();
		});
	}

	async render() {
		const pokemons = await this.makePokemonList();
		const pokemonList = document.querySelector('.pokemon-list');
		const pokeShop = document.querySelector('.poke-shop');
		const list = `
      		<div class="pokemon-list">
				${pokemons.join('')} 
			</div>
    	`;
		if (pokemonList) {
			pokemonList.innerHTML += pokemons.join('');
			return;
		} else { 
			return list;
		}
	}
}

export default PokemonList;