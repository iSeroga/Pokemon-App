import Pokemon from './components/Pokemon/Pokemon.js';
import PokemonList from './components/PokemoList/PokemonList.js';
const btnSearch = document.querySelector('.btnSearch');
const searchValue = document.querySelector('.search-value');
const pokeShop = document.querySelector('.poke-shop');

window.onload = async e => {
    e.preventDefault();
    const { results } = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`).then(res => res.json());
    // console.log({list});
    const res = await dibilBlyat(results);
    const list = new PokemonList(resgitgit).render();
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

const dibilBlyat = async (list) => {
    return await Promise.all(list.map(({url}) => fetch(url).then(res => res.json())));
};
