(() => {
    let pokes = ScrapingPokemon();
    console.log(pokes);
})();

function ScrapingPokemon() {
    let pokes = [];
    const pokeNodes = Array.from(document.querySelectorAll('table')).filter(x => x.innerHTML.includes('実数値'));
    pokeNodes.forEach(node => {
        let name, item, ability,
            ivs = [31, 31, 31, 31, 31, 31],
            evs = [0, 0, 0, 0, 0, 0],
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
            } else if (trNode.innerHTML.includes('技')) {
                let movesNodes = tdNodes[1].querySelectorAll('strong,b');
                movesNodes.forEach(y => {
                    y.innerText.split('/').forEach(x => {
                        moves.push(x.trim());
                    });
                });
            }
        });
        pokes.push(new Pokemon(name, item, ability, moves, ivs, evs));
    });

    return pokes;
}