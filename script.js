import Pokemon from './components/Pokemon/Pokemon.js';
import PokemonList from './components/PokemoList/PokemonList.js';
const btnSearch = document.querySelector('.btnSearch');
const searchValue = document.querySelector('.search-value');
const pokeShop = document.querySelector('.poke-shop');

window.onload = async e => {
    e.preventDefault();
    const { results } = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`).then(res => res.json());
    const list = await new PokemonList(results).render();
    pokeShop.innerHTML = list;
};

btnSearch.addEventListener("click", async (e) => {
    e.preventDefault();
    const pokemoneName = searchValue.value.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoneName}`).then(res => res.json());
    const { name, stats, sprites } = data;
    const pokemon = new Pokemon(name, stats, sprites).render();
    pokeShop.innerHTML = pokemon;
});
