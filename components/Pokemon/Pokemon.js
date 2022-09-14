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
        return `
        <div class="pokemonBox">
            <div class="statsBox">
                <div class="hp">Hp: ${hp}</div><br>
                <div class="attack">Attack: ${attack}</div><br>
                <div class="defense">Defence: ${defense}</div><br>
            </div>
        </div>
        `;
    }

}

export default Pokemon; 