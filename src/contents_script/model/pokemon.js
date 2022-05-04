class Pokemon {
    constructor(name, item, ability, nature, moves, ivs, evs) {
        [this.name, this.suffix] = Pokemon.ConvertName(name);
        this.item = Pokemon.ConvertItem(item);
        this.moves = Pokemon.ConvertMove(moves);
        this.ability = Pokemon.ConvertAbility(ability);
        this.nature = Pokemon.ConvertNature(nature);
        this.ivs = ivs;
        this.evs = evs;

        //個別特性対応
        if (uniqueAblity[this.name + '-' + this.suffix]) this.ability = uniqueAblity[this.name + '-' + this.suffix];

    }
    static statsName = ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];

    //日本語名から英語名への変換
    static ConvertName(prmName) {
        let name = prmName.replace(/（/g, '(').replace(/）/g, ')');
        let suffix = '';

        if (pokeJ2E[name]) {
            //対象が直接存在する場合
            name = pokeJ2E[name];
            let split = name.split('$');
            if (split[0]) name = split[0];
            if (split[1]) suffix = split[1];
        } else {
            //リージョン対応
            for (let [key, value] of Object.entries(regionSuffix)) {
                let regex = new RegExp('^' + key, 'i');
                if (name.match(regex)) {
                    name = pokeJ2E[name.replace(regex, '')];
                    suffix = value;
                }
                regex = new RegExp('\\(.*?' + key + '.*?\\)$', 'i');
                if (name.match(regex)) {
                    name = pokeJ2E[name.replace(regex, '')];
                    suffix = value;
                }
            }
            //キョダイマックス対応
            let regex = new RegExp('^キョダイ(マックス)', 'i');
            if (name.match(regex)) {
                name = pokeJ2E[name.replace(regex, '')];
                suffix = 'Gmax';
            }
            regex = new RegExp('\\(.*?キョダイ(マックス).*?\\)$', 'i');
            if (name.match(regex)) {
                name = pokeJ2E[name.replace(regex, '')];
                suffix = 'Gmax';
            }
            //メガシンカ対応
            regex = new RegExp('^メガ');
            if (name.match(regex)) {
                name = name.replace(regex, '');
                suffix = 'Mega';
                regex = new RegExp('[Xx]$');
                if (name.match(regex)) {
                    name = name.replace(regex, '');
                    suffix += '-X';
                }
                regex = new RegExp('[Yy]$');
                if (name.match(regex)) {
                    name = name.replace(regex, '');
                    suffix += '-Y';
                }
            }
            //その他かっこ付き
            regex = new RegExp('\\(.+?\\)$');
            if (name.match(regex)) {
                name = pokeJ2E[name.replace(regex, '')];
            }

        }
        return [name, suffix];
    }

    static ConvertItem(item) {
        if (itemJ2E[item]) item = itemJ2E[item];
        return item;
    }
    static ConvertNature(nature) {
        if (natureJ2E[nature]) nature = natureJ2E[nature];
        return nature;
    }
    static ConvertAbility(ability) {
        if (abilityJ2E[ability]) ability = abilityJ2E[ability];
        return ability;
    }
    static ConvertMove(moves) {
        let tmpmoves = [];
        moves.forEach(move => {
            if (moveJ2E[move]) tmpmoves.push(moveJ2E[move]);
            else tmpmoves.push(move);
        });
        return tmpmoves;
    }

    //表示用能力値
    statsStringfy() {
            let ret = '';
            for (let i = 0; i < 6; i++) {
                if (i > 0) ret += '-';
                ret += `${this.evs[i]}(${this.ivs[i]})`;
            }
            return ret;
        }
        //ShowDownのフォーマットへ変換
    SDFormat() {
        let s = '';
        s += this.name + (this.suffix ? '-' + this.suffix : '') + ' @ ' + this.item + '\n';
        s += 'Ability: ' + this.ability + '\n';
        s += 'Level: 50\n';
        s += 'EVs:';
        let tmp = [];
        for (let i = 0; i < this.evs.length; i++) {
            if (this.evs[i] !== '0') tmp.push(' ' + this.evs[i] + ' ' + Pokemon.statsName[i] + ' ');
        }
        s += tmp.join('/') + '\n';
        s += this.nature + ' Nature' + '  \n';
        tmp = [];
        for (let i = 0; i < this.ivs.length; i++) {
            if (this.ivs[i] !== '31') tmp.push(' ' + this.ivs[i] + ' ' + Pokemon.statsName[i] + ' ');
        }
        if (tmp.length > 0) {
            s += 'IVs:';
            s += tmp.join('/');
            s += '\n';
        }
        this.moves.forEach(move => {
            s += '- ' + move + '\n';
        });
        return s;
    }

}