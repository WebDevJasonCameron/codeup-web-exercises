// 1. Create monsters array
let monstersList = [];

// 2. Create addMonsterObj function
function addMonsterObj(mName, mType, mSize, alignment, legendary){

    let monster = {
        mName: mName,
        mType: mType,
        mSize: mSize,
        alignment: alignment,
        legendary: legendary,
    }

    monstersList.push(monster);
}

// 3. Add several monsters to the array with the functions
addMonsterObj('Aarakocra', 'humanoid', 'medium', 'neutral good', false);
addMonsterObj('Azer', 'elemental', 'medium', 'lawful neutral', false);
addMonsterObj('Gazer', 'aberration', 'tiny', 'neutral evil', false);
addMonsterObj('Beholder', 'aberration', 'large', 'lawful evil', true);
addMonsterObj('Bandit', 'humanoid', 'medium', 'any non-lawful alignment', false);
addMonsterObj('Berserker', 'humanoid', 'medium','any chaotic alignment', false );
addMonsterObj('Fomorian', 'giant', 'huge', 'chaotic evil', false);
addMonsterObj('Gargoyle', 'elemental', 'medium', 'chaotic evil', false);
addMonsterObj('Ghost', 'undead', 'medium', 'any alignment', false);
addMonsterObj('Ghoul', 'undead', 'medium', 'chaotic evil', false);
addMonsterObj('Nightmare', 'fiend', 'large', 'neutral evil', false);
addMonsterObj('Orc', 'humanoid','medium', 'chaotic evil', false);
addMonsterObj('Rat', 'beast', 'tiny', 'unaligned', false);
addMonsterObj('Sprite', 'fey', 'tiny', 'neutral good', false);
addMonsterObj('Thug', 'humanoid', 'medium', 'any non-good alignment', false);
addMonsterObj('Troll', 'giant', 'large', 'chaotic evil', false);

// quick check
console.log(monstersList);

monstersList.forEach(function (monster){
    console.log(monster.mName);
})
