class Pokemon {
    constructor(name, stats, sprites) {
        this.name = name;
        this.stats = stats;
        this.sprites = sprites;

    }
    unpackStat() {
        const baseStat = {}; 
        for (let i = 0; i < this.stats.length; i++) {
            const { base_stat, stat } = this.stats[i];
            const { name } = stat;
            baseStat[name] = base_stat;
        }
        return baseStat;
        
    }

    render() {
        const { hp, attack, defense } = this.unpackStat();
        const {front_default } = this.sprites;
        const basePicture  = front_default;
        return `
        <div class="pokemonBox">
            <img src="${basePicture}" class="pokePhoto" >
            <div class="pokemon-name"> ${this.name.toUpperCase()}</div>
            <div class="statsBox">
                <div class="hp">Hp: ${hp}</div>
                <div class="attack">Attack: ${attack}</div>
                <div class="defense">Defence: ${defense}</div>
            </div>
        </div>
        `;
    }
}
export default Pokemon; 