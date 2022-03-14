const uniqueAblity = {
    "Calyrex-Shadow": "As One (Spectrier)",
    "Calyrex-Ice": "As One (Glastrier)",
};

const abilityJ2E = {
    "ARシステム": "RKS System",
    "アイスフェイス": "Ice Face",
    "アイスボディ": "Ice Body",
    "あくしゅう": "Stench",
    "あついしぼう": "Thick Fat",
    "あとだし": "Stall",
    "アナライズ": "Analytic",
    "あまのじゃく": "Contrary",
    "あめうけざら": "Rain Dish",
    "あめふらし": "Drizzle",
    "ありじごく": "Arena Trap",
    "アロマベール": "Aroma Veil",
    "いかく": "Intimidate",
    "いかりのつぼ": "Anger Point",
    "いしあたま": "Rock Head",
    "いたずらごころ": "Prankster",
    "いやしのこころ": "Healer",
    "イリュージョン": "Illusion",
    "いろめがね": "Tinted Lens",
    "うのミサイル": "Gulp Missile",
    "うるおいボイス": "Liquid Voice",
    "うるおいボディ": "Hydration",
    "エアロック": "Air Lock",
    "エレキスキン": "Galvanize",
    "エレキメイカー": "Electric Surge",
    "えんかく": "Long Reach",
    "おどりこ": "Dancer",
    "おみとおし": "Frisk",
    "おやこあい": "Parental Bond",
    "オーラブレイク": "Aura Break",
    "おわりのだいち": "Desolate Land",
    "かいりきバサミ": "Hyper Cutter",
    "かがくのちから": "Power of Alchemy",
    "かがくへんかガス": "Neutralizing Gas",
    "かげふみ": "Shadow Tag",
    "かそく": "Speed Boost",
    "かたいツメ": "Tough Claws",
    "かたやぶり": "Mold Breaker",
    "かちき": "Competitive",
    "カブトアーマー": "Battle Armor",
    "カーリーヘアー": "Tangling Hair",
    "かるわざ": "Unburden",
    "かわりもの": "Imposter",
    "かんそうはだ": "Dry Skin",
    "がんじょう": "Sturdy",
    "がんじょうあご": "Strong Jaw",
    "ききかいひ": "Emergency Exit",
    "きけんよち": "Anticipation",
    "きずなへんげ": "Battle Bond",
    "きみょうなくすり": "Curious Medicine",
    "きもったま": "Scrappy",
    "きゅうばん": "Suction Cups",
    "きょううん": "Super Luck",
    "きょうせい": "Symbiosis",
    "きんちょうかん": "Unnerve",
    "ぎたい": "Mimicry",
    "ぎゃくじょう": "Berserk",
    "ぎょぐん": "Schooling",
    "くいしんぼう": "Gluttony",
    "クイックドロウ": "Quick Draw",
    "くさのけがわ": "Grass Pelt",
    "くだけるよろい": "Weak Armor",
    "クリアボディ": "Clear Body",
    "くろのいななき": "Grim Neigh",
    "グラスメイカー": "Grassy Surge",
    "げきりゅう": "Torrent",
    "こおりのりんぷん": "Ice Scales",
    "こんじょう": "Guts",
    "ごりむちゅう": "Gorilla Tactics",
    "サイコメイカー": "Psychic Surge",
    "さいせいりょく": "Regenerator",
    "サーフテール": "Surge Surfer",
    "さまようたましい": "Wandering Spirit",
    "さめはだ": "Rough Skin",
    "サンパワー": "Solar Power",
    "シェルアーマー": "Shell Armor",
    "しぜんかいふく": "Natural Cure",
    "しめりけ": "Damp",
    "しゅうかく": "Harvest",
    "しょうりのほし": "Victory Star",
    "しろいけむり": "White Smoke",
    "しろのいななき": "Chilling Neigh",
    "シンクロ": "Synchronize",
    "しんりょく": "Overgrow",
    "じきゅうりょく": "Stamina",
    "じしんかじょう": "Moxie",
    "じゅうなん": "Limber",
    "じゅくせい": "Ripen",
    "じょうききかん": "Steam Engine",
    "じょおうのいげん": "Queenly Majesty",
    "じりょく": "Magnet Pull",
    "じんばいったい": "As One",
    "すいすい": "Swift Swim",
    "スイートベール": "Sweet Veil",
    "すいほう": "Water Bubble",
    "スカイスキン": "Aerilate",
    "スキルリンク": "Skill Link",
    "スクリューおびれ": "Propeller Tail",
    "すじがねいり": "Stalwart",
    "すてみ": "Reckless",
    "スナイパー": "Sniper",
    "すなおこし": "Sand Stream",
    "すなかき": "Sand Rush",
    "すながくれ": "Sand Veil",
    "すなのちから": "Sand Force",
    "すなはき": "Sand Spit",
    "すりぬけ": "Infiltrator",
    "するどいめ": "Keen Eye",
    "スロースタート": "Slow Start",
    "スワームチェンジ": "Power Construct",
    "せいぎのこころ": "Justified",
    "せいしんりょく": "Inner Focus",
    "せいでんき": "Static",
    "ぜったいねむり": "Comatose",
    "そうしょく": "Sap Sipper",
    "ソウルハート": "Soul-Heart",
    "たいねつ": "Heatproof",
    "ターボブレイズ": "Turboblaze",
    "たまひろい": "Ball Fetch",
    "たんじゅん": "Simple",
    "ダウンロード": "Download",
    "ダークオーラ": "Dark Aura",
    "だっぴ": "Shed Skin",
    "ダルマモード": "Zen Mode",
    "ちからずく": "Sheer Force",
    "ちからもち": "Huge Power",
    "ちくでん": "Volt Absorb",
    "ちどりあし": "Tangled Feet",
    "ちょすい": "Water Absorb",
    "てきおうりょく": "Adaptability",
    "テクニシャン": "Technician",
    "てつのこぶし": "Iron Fist",
    "てつのトゲ": "Iron Barbs",
    "テラボルテージ": "Teravolt",
    "テレパシー": "Telepathy",
    "てんきや": "Forecast",
    "てんねん": "Unaware",
    "てんのめぐみ": "Serene Grace",
    "デルタストリーム": "Delta Stream",
    "でんきエンジン": "Motor Drive",
    "とうそうしん": "Rivalry",
    "とびだすなかみ": "Innards Out",
    "トランジスタ": "Transistor",
    "トレース": "Trace",
    "どくしゅ": "Poison Touch",
    "どくのトゲ": "Poison Point",
    "どくぼうそう": "Toxic Boost",
    "どんかん": "Oblivious",
    "ナイトメア": "Bad Dreams",
    "なまけ": "Truant",
    "にげあし": "Run Away",
    "にげごし": "Wimp Out",
    "ぬめぬめ": "Gooey",
    "ねつぼうそう": "Flare Boost",
    "ねんちゃく": "Sticky Hold",
    "ノーガード": "No Guard",
    "ノーてんき": "Cloud Nine",
    "ノーマルスキン": "Normalize",
    "のろわれボディ": "Cursed Body",
    "はがねつかい": "Steelworker",
    "はがねのせいしん": "Steely Spirit",
    "はじまりのうみ": "Primordial Sea",
    "はっこう": "Illuminate",
    "はとむね": "Big Pecks",
    "ハードロック": "Solid Rock",
    "はやあし": "Quick Feet",
    "はやおき": "Early Bird",
    "はやてのつばさ": "Gale Wings",
    "はらぺこスイッチ": "Hunger Switch",
    "はりきり": "Hustle",
    "はりこみ": "Stakeout",
    "ばけのかわ": "Disguise",
    "バッテリー": "Battery",
    "バトルスイッチ": "Stance Change",
    "バリアフリー": "Screen Cleaner",
    "パステルベール": "Pastel Veil",
    "パワースポット": "Power Spot",
    "パンクロック": "Punk Rock",
    "ひでり": "Drought",
    "ひとでなし": "Merciless",
    "ひらいしん": "Lightning Rod",
    "ヒーリングシフト": "Triage",
    "ビーストブースト": "Beast Boost",
    "ビビッドボディ": "Dazzling",
    "びびり": "Rattled",
    "ファーコート": "Fur Coat",
    "ファントムガード": "Shadow Shield",
    "フィルター": "Filter",
    "フェアリーオーラ": "Fairy Aura",
    "フェアリースキン": "Pixilate",
    "ふかしのこぶし": "Unseen Fist",
    "ふくがん": "Compound Eyes",
    "ふくつのこころ": "Steadfast",
    "ふくつのたて": "Dauntless Shield",
    "ふしぎなうろこ": "Marvel Scale",
    "ふしぎなまもり": "Wonder Guard",
    "ふしょく": "Corrosion",
    "ふとうのけん": "Intrepid Sword",
    "ふみん": "Insomnia",
    "ふゆう": "Levitate",
    "フラワーギフト": "Flower Gift",
    "フラワーベール": "Flower Veil",
    "フリーズスキン": "Refrigerate",
    "フレンドガード": "Friend Guard",
    "ぶきよう": "Klutz",
    "ブレインフォース": "Neuroforce",
    "プラス": "Plus",
    "プリズムアーマー": "Prism Armor",
    "プレッシャー": "Pressure",
    "ヘドロえき": "Liquid Ooze",
    "へんげんじざい": "Protean",
    "へんしょく": "Color Change",
    "ヘヴィメタル": "Heavy Metal",
    "ほうし": "Effect Spore",
    "ほおぶくろ": "Cheek Pouch",
    "ほのおのからだ": "Flame Body",
    "ほろびのボディ": "Perish Body",
    "ぼうおん": "Soundproof",
    "ぼうじん": "Overcoat",
    "ぼうだん": "Bulletproof",
    "ポイズンヒール": "Poison Heal",
    "マイナス": "Minus",
    "マイペース": "Own Tempo",
    "マグマのよろい": "Magma Armor",
    "まけんき": "Defiant",
    "マジシャン": "Magician",
    "マジックガード": "Magic Guard",
    "マジックミラー": "Magic Bounce",
    "マルチスケイル": "Multiscale",
    "マルチタイプ": "Multitype",
    "ミイラ": "Mummy",
    "ミストメイカー": "Misty Surge",
    "みずがため": "Water Compaction",
    "みずのベール": "Water Veil",
    "みつあつめ": "Honey Gather",
    "ミラーアーマー": "Mirror Armor",
    "ミラクルスキン": "Wonder Skin",
    "むしのしらせ": "Swarm",
    "ムラっけ": "Moody",
    "メガランチャー": "Mega Launcher",
    "メタルプロテクト": "Full Metal Body",
    "メロメロボディ": "Cute Charm",
    "めんえき": "Immunity",
    "もうか": "Blaze",
    "ものひろい": "Pickup",
    "もふもふ": "Fluffy",
    "もらいび": "Flash Fire",
    "やるき": "Vital Spirit",
    "ゆうばく": "Aftermath",
    "ゆきかき": "Slush Rush",
    "ゆきがくれ": "Snow Cloak",
    "ゆきふらし": "Snow Warning",
    "ようりょくそ": "Chlorophyll",
    "ヨガパワー": "Pure Power",
    "よちむ": "Forewarn",
    "よびみず": "Storm Drain",
    "よわき": "Defeatist",
    "ライトメタル": "Light Metal",
    "リーフガード": "Leaf Guard",
    "リベロ": "Libero",
    "リミットシールド": "Shields Down",
    "りゅうのあぎと": "Dragon's Maw",
    "りんぷん": "Shield Dust",
    "レシーバー": "Receiver",
    "わたげ": "Cotton Down",
    "わるいてぐせ": "Pickpocket"
};