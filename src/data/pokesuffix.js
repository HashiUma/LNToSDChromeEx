let regionSuffix = {
    "アローラ": "Alola",
    "ガラル": "Galar",
    "ヒスイ": "Hisui"
};
let pokeSuffix = {
    "Venusaur": [
        "",
        "Mega",
        "Gmax"
    ],
    "Charizard": [
        "",
        "Mega-X",
        "Mega-Y",
        "Gmax"
    ],
    "Blastoise": [
        "",
        "Mega",
        "Gmax"
    ],
    "Butterfree": [
        "",
        "Gmax"
    ],
    "Beedrill": [
        "",
        "Mega"
    ],
    "Pidgeot": [
        "",
        "Mega"
    ],
    "Rattata": [
        "",
        "Alola"
    ],
    "Raticate": [
        "",
        "Alola"
    ],
    "Pikachu": [
        "",
        "Cosplay",
        "Rock-Star",
        "Belle",
        "Pop-Star",
        "PhD",
        "Libre",
        "Original",
        "Hoenn",
        "Sinnoh",
        "Unova",
        "Kalos",
        "Alola",
        "Partner",
        "Starter",
        "Gmax",
        "World"
    ],
    "Raichu": [
        "",
        "Alola"
    ],
    "Sandshrew": [
        "",
        "Alola"
    ],
    "Sandslash": [
        "",
        "Alola"
    ],
    "Vulpix": [
        "",
        "Alola"
    ],
    "Ninetales": [
        "",
        "Alola"
    ],
    "Diglett": [
        "",
        "Alola"
    ],
    "Dugtrio": [
        "",
        "Alola"
    ],
    "Meowth": [
        "",
        "Alola",
        "Galar",
        "Gmax"
    ],
    "Persian": [
        "",
        "Alola"
    ],
    "Growlithe": [
        "",
        "Hisui"
    ],
    "Arcanine": [
        "",
        "Hisui"
    ],
    "Alakazam": [
        "",
        "Mega"
    ],
    "Machamp": [
        "",
        "Gmax"
    ],
    "Geodude": [
        "",
        "Alola"
    ],
    "Graveler": [
        "",
        "Alola"
    ],
    "Golem": [
        "",
        "Alola"
    ],
    "Ponyta": [
        "",
        "Galar"
    ],
    "Rapidash": [
        "",
        "Galar"
    ],
    "Slowpoke": [
        "",
        "Galar"
    ],
    "Slowbro": [
        "",
        "Mega",
        "Galar"
    ],
    "Farfetch'd": [
        "",
        "Galar"
    ],
    "Grimer": [
        "",
        "Alola"
    ],
    "Muk": [
        "",
        "Alola"
    ],
    "Gengar": [
        "",
        "Mega",
        "Gmax"
    ],
    "Kingler": [
        "",
        "Gmax"
    ],
    "Voltorb": [
        "",
        "Hisui"
    ],
    "Electrode": [
        "",
        "Hisui"
    ],
    "Exeggutor": [
        "",
        "Alola"
    ],
    "Marowak": [
        "",
        "Alola"
    ],
    "Weezing": [
        "",
        "Galar"
    ],
    "Kangaskhan": [
        "",
        "Mega"
    ],
    "Mr. Mime": [
        "",
        "Galar"
    ],
    "Pinsir": [
        "",
        "Mega"
    ],
    "Gyarados": [
        "",
        "Mega"
    ],
    "Lapras": [
        "",
        "Gmax"
    ],
    "Eevee": [
        "",
        "Starter",
        "Gmax"
    ],
    "Aerodactyl": [
        "",
        "Mega"
    ],
    "Snorlax": [
        "",
        "Gmax"
    ],
    "Articuno": [
        "",
        "Galar"
    ],
    "Zapdos": [
        "",
        "Galar"
    ],
    "Moltres": [
        "",
        "Galar"
    ],
    "Mewtwo": [
        "",
        "Mega-X",
        "Mega-Y"
    ],
    "Typhlosion": [
        "",
        "Hisui"
    ],
    "Pichu": [
        "",
        "Spiky-eared"
    ],
    "Ampharos": [
        "",
        "Mega"
    ],
    "Slowking": [
        "",
        "Galar"
    ],
    "Steelix": [
        "",
        "Mega"
    ],
    "Qwilfish": [
        "",
        "Hisui"
    ],
    "Scizor": [
        "",
        "Mega"
    ],
    "Heracross": [
        "",
        "Mega"
    ],
    "Sneasel": [
        "",
        "Hisui"
    ],
    "Corsola": [
        "",
        "Galar"
    ],
    "Houndoom": [
        "",
        "Mega"
    ],
    "Tyranitar": [
        "",
        "Mega"
    ],
    "Sceptile": [
        "",
        "Mega"
    ],
    "Blaziken": [
        "",
        "Mega"
    ],
    "Swampert": [
        "",
        "Mega"
    ],
    "Zigzagoon": [
        "",
        "Galar"
    ],
    "Linoone": [
        "",
        "Galar"
    ],
    "Gardevoir": [
        "",
        "Mega"
    ],
    "Sableye": [
        "",
        "Mega"
    ],
    "Mawile": [
        "",
        "Mega"
    ],
    "Aggron": [
        "",
        "Mega"
    ],
    "Medicham": [
        "",
        "Mega"
    ],
    "Manectric": [
        "",
        "Mega"
    ],
    "Sharpedo": [
        "",
        "Mega"
    ],
    "Camerupt": [
        "",
        "Mega"
    ],
    "Altaria": [
        "",
        "Mega"
    ],
    "Castform": [
        "",
        "Sunny",
        "Rainy",
        "Snowy"
    ],
    "Banette": [
        "",
        "Mega"
    ],
    "Absol": [
        "",
        "Mega"
    ],
    "Glalie": [
        "",
        "Mega"
    ],
    "Salamence": [
        "",
        "Mega"
    ],
    "Metagross": [
        "",
        "Mega"
    ],
    "Latias": [
        "",
        "Mega"
    ],
    "Latios": [
        "",
        "Mega"
    ],
    "Kyogre": [
        "",
        "Primal"
    ],
    "Groudon": [
        "",
        "Primal"
    ],
    "Rayquaza": [
        "",
        "Mega"
    ],
    "Deoxys": [
        "",
        "Attack",
        "Defense",
        "Speed"
    ],
    "Wormadam": [
        "",
        "Sandy",
        "Trash"
    ],
    "Cherrim": [
        "",
        "Sunshine"
    ],
    "Lopunny": [
        "",
        "Mega"
    ],
    "Garchomp": [
        "",
        "Mega"
    ],
    "Lucario": [
        "",
        "Mega"
    ],
    "Abomasnow": [
        "",
        "Mega"
    ],
    "Gallade": [
        "",
        "Mega"
    ],
    "Rotom": [
        "",
        "Heat",
        "Wash",
        "Frost",
        "Fan",
        "Mow"
    ],
    "Dialga": [
        "",
        "Origin"
    ],
    "Palkia": [
        "",
        "Origin"
    ],
    "Giratina": [
        "",
        "Origin"
    ],
    "Shaymin": [
        "",
        "Sky"
    ],
    "Arceus": [
        "",
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ],
    "Samurott": [
        "",
        "Hisui"
    ],
    "Audino": [
        "",
        "Mega"
    ],
    "Lilligant": [
        "",
        "Hisui"
    ],
    "Basculin": [
        "",
        "Blue-Striped",
        "White-Striped"
    ],
    "Darumaka": [
        "",
        "Galar"
    ],
    "Darmanitan": [
        "",
        "Zen",
        "Galar",
        "Galar-Zen"
    ],
    "Yamask": [
        "",
        "Galar"
    ],
    "Garbodor": [
        "",
        "Gmax"
    ],
    "Zorua": [
        "",
        "Hisui"
    ],
    "Zoroark": [
        "",
        "Hisui"
    ],
    "Stunfisk": [
        "",
        "Galar"
    ],
    "Braviary": [
        "",
        "Hisui"
    ],
    "Tornadus": [
        "",
        "Therian"
    ],
    "Thundurus": [
        "",
        "Therian"
    ],
    "Landorus": [
        "",
        "Therian"
    ],
    "Kyurem": [
        "",
        "Black",
        "White"
    ],
    "Keldeo": [
        "",
        "Resolute"
    ],
    "Meloetta": [
        "",
        "Pirouette"
    ],
    "Genesect": [
        "",
        "Douse",
        "Shock",
        "Burn",
        "Chill"
    ],
    "Greninja": [
        "",
        "Ash"
    ],
    "Vivillon": [
        "",
        "Fancy",
        "Pokeball"
    ],
    "Floette": [
        "",
        "Eternal"
    ],
    "Meowstic": [
        "",
        "F"
    ],
    "Aegislash": [
        "",
        "Blade"
    ],
    "Sliggoo": [
        "",
        "Hisui"
    ],
    "Goodra": [
        "",
        "Hisui"
    ],
    "Pumpkaboo": [
        "",
        "Small",
        "Large",
        "Super"
    ],
    "Gourgeist": [
        "",
        "Small",
        "Large",
        "Super"
    ],
    "Avalugg": [
        "",
        "Hisui"
    ],
    "Xerneas": [
        "",
        "Neutral"
    ],
    "Zygarde": [
        "",
        "10%",
        "Complete"
    ],
    "Diancie": [
        "",
        "Mega"
    ],
    "Hoopa": [
        "",
        "Unbound"
    ],
    "Decidueye": [
        "",
        "Hisui"
    ],
    "Oricorio": [
        "",
        "Pom-Pom",
        "Pa'u",
        "Sensu"
    ],
    "Lycanroc": [
        "",
        "Midnight",
        "Dusk"
    ],
    "Wishiwashi": [
        "",
        "School"
    ],
    "Silvally": [
        "",
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ],
    "Minior": [
        "",
        "Meteor"
    ],
    "Mimikyu": [
        "",
        "Busted"
    ],
    "Necrozma": [
        "",
        "Dusk-Mane",
        "Dawn-Wings",
        "Ultra"
    ],
    "Magearna": [
        "",
        "Original"
    ],
    "Melmetal": [
        "",
        "Gmax"
    ],
    "Rillaboom": [
        "",
        "Gmax"
    ],
    "Cinderace": [
        "",
        "Gmax"
    ],
    "Inteleon": [
        "",
        "Gmax"
    ],
    "Corviknight": [
        "",
        "Gmax"
    ],
    "Orbeetle": [
        "",
        "Gmax"
    ],
    "Drednaw": [
        "",
        "Gmax"
    ],
    "Coalossal": [
        "",
        "Gmax"
    ],
    "Flapple": [
        "",
        "Gmax"
    ],
    "Appletun": [
        "",
        "Gmax"
    ],
    "Sandaconda": [
        "",
        "Gmax"
    ],
    "Cramorant": [
        "",
        "Gulping",
        "Gorging"
    ],
    "Toxtricity": [
        "",
        "Low-Key",
        "Gmax",
        "Low-Key-Gmax"
    ],
    "Centiskorch": [
        "",
        "Gmax"
    ],
    "Sinistea": [
        "",
        "Antique"
    ],
    "Polteageist": [
        "",
        "Antique"
    ],
    "Hatterene": [
        "",
        "Gmax"
    ],
    "Grimmsnarl": [
        "",
        "Gmax"
    ],
    "Alcremie": [
        "",
        "Gmax"
    ],
    "Eiscue": [
        "",
        "Noice"
    ],
    "Indeedee": [
        "",
        "F"
    ],
    "Morpeko": [
        "",
        "Hangry"
    ],
    "Copperajah": [
        "",
        "Gmax"
    ],
    "Duraludon": [
        "",
        "Gmax"
    ],
    "Zacian": [
        "",
        "Crowned"
    ],
    "Zamazenta": [
        "",
        "Crowned"
    ],
    "Eternatus": [
        "",
        "Eternamax"
    ],
    "Urshifu": [
        "",
        "Rapid-Strike",
        "Gmax",
        "Rapid-Strike-Gmax"
    ],
    "Zarude": [
        "",
        "Dada"
    ],
    "Calyrex": [
        "",
        "Ice",
        "Shadow"
    ],
    "Basculegion": [
        "",
        "F"
    ],
    "Enamorus": [
        "",
        "Therian"
    ],
    "Crucibelle": [
        "",
        "Mega"
    ],
    "Venomicon": [
        "",
        "Epilogue"
    ]
};