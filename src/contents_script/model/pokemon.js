class Pokemon {
    constructor(name, item, ability, nature, moves, ivs, evs) {
        this.name = name;
        this.item = item;
        this.moves = moves;
        this.ability = ability;
        this.nature = nature;
        this.ivs = ivs;
        this.evs = evs;
    }
    static statsName = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];

    SDFormat() {
        let s = '';
        let name = this.name,
            item = this.item,
            ability = this.ability,
            nature = this.nature,
            moves = [];
        if (pokeJ2E[name]) name = pokeJ2E[this.name];
        if (itemJ2E[item]) item = itemJ2E[item];
        if (natureJ2E[nature]) nature = itemJ2E[nature];
        if (abilityJ2E[ability]) ability = abilityJ2E[ability];
        this.moves.forEach(move => {
            if (moveJ2E[move]) moves.push(moveJ2E[move]);
            else moves.push(move);
        });

        s += name + ' @ ' + item + '\n';
        s += 'Ability: ' + ability + '\n';
        s += 'Level: 50\n';
        s += 'EVs:';
        let tmp = [];
        for (let i = 0; i < this.evs.length; i++) {
            if (this.evs[i] !== '0') tmp.push(' ' + this.evs[i] + ' ' + Pokemon.statsName[i] + ' ');
        }
        s += tmp.join('/') + '\n';
        s += nature + ' Nature' + '\n';
        tmp = [];
        for (let i = 0; i < this.ivs.length; i++) {
            if (this.ivs[i] !== '31') tmp.push(' ' + this.ivs[i] + ' ' + Pokemon.statsName[i] + ' ');
        }
        if (tmp.length > 0) {
            s += 'IVs:';
            s += tmp.join('/');
            s += '\n';
        }
        moves.forEach(move => {
            s += '- ' + move + '\n';
        });
        return s;
    }

}