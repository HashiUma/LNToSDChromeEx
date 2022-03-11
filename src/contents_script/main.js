(() => {
    let pokes = ScrapingPokemon().slice(0, 6);
    if (pokes.length < 6) return;

    let str = '';
    pokes.forEach(poke => {
        str += poke.SDFormat() + '\n\n';
    });

    console.log(pokes);
    console.log(str);
    document.addEventListener('keydown', e => {
        if (e.key === 'x' || e.altKey) {
            console.log(str);
        }
    });
})();

function ScrapingPokemon() {
    let pokes = [];
    const pokeNodes = Array.from(document.querySelectorAll('table')).filter(x => x.innerHTML.includes('実数値'));
    pokeNodes.forEach(node => {
        let name, item, ability, nature,
            ivs = ['31', '31', '31', '31', '31', '31'],
            evs = ['0', '0', '0', '0', '0', '0'],
            moves = [];
        name = node.previousSibling.innerText;
        const trNodes = Array.from(node.querySelectorAll('tr'));
        trNodes.forEach(trNode => {
            const tdNodes = trNode.querySelectorAll('td');
            if (trNode.innerHTML.includes('特性')) {
                ability = tdNodes[1].innerText;
            } else if (trNode.innerHTML.includes('実数値')) {
                let statsStr = tdNodes[1].innerText;
                let stats = statsStr.split('-');
                for (let i = 0; i < stats.length; i++) {
                    let result = stats[i].match(/\d+?\((\d+?)\)/);
                    if (result) {
                        evs[i] = result[1];
                    }
                }
                if (statsStr.includes('S個体値0')) {
                    ivs[5] = 0;
                }
            } else if (trNode.innerHTML.includes('持ち物')) {
                item = tdNodes[1].innerText.trim();
            } else if (trNode.innerHTML.includes('性格')) {
                nature = tdNodes[1].innerText.trim();
            } else if (trNode.innerHTML.includes('技')) {
                let movesNodes = tdNodes[1].querySelectorAll('strong,b');
                movesNodes.forEach(y => {
                    y.innerText.replace(/\r?\n/g, '/').split('/').forEach(x => {
                        if (x.trim() !== '') moves.push(x.trim());
                    });
                });
            }
        });
        pokes.push(new Pokemon(name, item, ability, nature, moves, ivs, evs));
    });

    return pokes;
}