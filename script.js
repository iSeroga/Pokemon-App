import Pokemon from './components/Pokemon/Pokemon.js';
import pokemonService from './services/pokemon.service.js';
const btnSearch = document.querySelector('.btnSearch');
const searchValue = document.querySelector('.search-value');
const pokeShop = document.querySelector('.poke-shop');
const addMOrePokemons = document.querySelector('.add-more-pokemons');
let offset = 10;
window.onload = async e => {
    e.preventDefault();
    const list = await pokemonService.getAll();
    pokeShop.innerHTML = list;
};

addMOrePokemons.addEventListener('click', async (e) => {
    e.preventDefault();
    offset += 10;
    await pokemonService.getAll(offset);
});

btnSearch.addEventListener("click", async (e) => {
    e.preventDefault();
    const pokemoneName = searchValue.value.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoneName}`).then(res => res.json());
    const { name, stats, sprites } = data;
    const pokemon = new Pokemon(name, stats, sprites);
    pokeShop.innerHTML = pokemon.render();
});
