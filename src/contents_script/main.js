(() => {
    let pokes = ScrapingPokemon().slice(0, 6);
    if (pokes.length < 6) return;
    CreatePokeModal(pokes)
})();

//モーダル全体作成
function CreatePokeModal(pokes) {
    const wrapper = document.createElement('div');

    const modalElement = document.createElement('div');
    modalElement.style.cssText = `
    max-height: 0px;
    overflow: hidden;
    transition: all .6s;
    background-color:white;
    border: solid;
    border-width:0px 5px 0px 5px;
    border-color:#cccccc;
    `;

    wrapper.style = cssText = `
    position: fixed;
    bottom: 0px; 
    right: 40px;
    z-index: 10000;
    `;

    let bgcolor = true;
    pokes.forEach(poke => {
        modalElement.appendChild(CreatePokeElement(poke, bgcolor));
        bgcolor = !bgcolor;
    });

    const copyButton = document.createElement('div');
    copyButton.innerText = '全てコピー';
    copyButton.style.cssText = `
        background-color:#bbbbbb;
        color:white;
        border-radius: 5px 5px 5px 5px;
        padding:4px 10px 4px 10px;
        margin:2px auto 2px auto;
        cursor:pointer;
        width:25%;
        text-align:center;
    `;
    copyButton.addEventListener('mouseover', () => {
        copyButton.style.backgroundColor = '#aaaaaa';
    });
    copyButton.addEventListener('mouseleave', () => {
        copyButton.style.backgroundColor = '#bbbbbb';
    });
    copyButton.addEventListener('click', () => {
        let str = '';
        pokes.forEach(poke => {
            str += poke.SDFormat() + '\n\n';
        });
        util.CopyClipBoard(str);
    });

    const openbutton = document.createElement('div');
    openbutton.innerText = '▲ SDエクスポート';
    openbutton.style.cssText = `
        background-color:#cccccc;
        color:white;
        cursor:pointer;
        font-size:1.5em;
        text-align:center;
        border-radius: 15px 15px 0 0;
        padding:5px 0 2px 0;
    `;
    openbutton.open = false;
    openbutton.addEventListener('click', () => {
        if (openbutton.open) {
            modalElement.style.maxHeight = '0px';
            openbutton.innerText = '▲ SDエクスポート';
        } else {
            modalElement.style.maxHeight = '800px';
            openbutton.innerText = '▼ SDエクスポート';
        }
        openbutton.open = !openbutton.open;
    });

    modalElement.appendChild(copyButton);
    wrapper.appendChild(openbutton);
    wrapper.appendChild(modalElement);
    document.body.appendChild(wrapper);
}

function CreatePokeElement(poke, bgcolor) {
    const pokeDiv = document.createElement('div');
    pokeDiv.style.cssText = `
        padding:10px 20px 10px 20px;
    `;
    pokeDiv.style.backgroundColor = bgcolor ? '#efefef' : '#fdfdfd';

    const nameInput = document.createElement('input');
    nameInput.value = poke.name;
    nameInput.disabled = true;
    const suffixs = pokeSuffix[poke.name];
    const suffixSelect = document.createElement('select');
    suffixSelect.addEventListener('change', () => {
        poke.suffix = suffixs[suffixSelect.selectedIndex];
    });

    if (suffixs) {
        suffixs.forEach(suffix => {
            const option = document.createElement('option');
            option.innerText = suffix;
            option.value = suffix;
            if (poke.suffix === suffix) option.selected = true;
            suffixSelect.appendChild(option);
        })
    } else {
        suffixSelect.disabled = true;
    }

    const copyButton = document.createElement('span');
    copyButton.innerText = 'コピー';
    copyButton.style.cssText = `
        background-color:#bbbbbb;
        color:white;
        border-radius: 5px 5px 5px 5px;
        padding:2px 10px 2px 10px;
        margin-left:5px;
        cursor:pointer;
    `;
    copyButton.addEventListener('mouseover', () => {
        copyButton.style.backgroundColor = '#aaaaaa';
    });
    copyButton.addEventListener('mouseleave', () => {
        copyButton.style.backgroundColor = '#bbbbbb';
    });
    copyButton.addEventListener('click', () => {
        util.CopyClipBoard(poke.SDFormat());
    });

    const div1 = document.createElement('div');
    div1.innerText =
        `特性：${poke.ability}　性格：${poke.nature}　持ち物：${poke.item} 
    努力値（個体値）：${poke.statsStringfy()}
    技：${poke.moves[0]}, ${poke.moves[1]}, ${poke.moves[2]}, ${poke.moves[3]}`;
    div1.style.cssText = `
        padding:5px 0 0 0;
        line-height:1.2em;
    `;

    pokeDiv.appendChild(nameInput);
    pokeDiv.appendChild(suffixSelect);
    pokeDiv.appendChild(copyButton);
    pokeDiv.appendChild(div1);
    return pokeDiv;
}

//構築記事紹介ページからポケモンのデータを取得する
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