/**
 *          Laying the Ground Work
 *
 */

// 1. Create monsters array
let monstersList = [];

// 2. Create addMonsterObj function to push new Monster objects into the array
function addMonsterObj(mName, mType, mSize, alignment, legendary){

    let monster = {
        flag: 'show',
        mName: mName,
        mType: mType,
        mSize: mSize,
        alignment: alignment,
        legendary: legendary,

        makeCard: function(){
            let cardTags =
                '<div class="monster-card ' + this.flag +'">' +
                '<h3>' + this.mName + '</h3>' +
                '<table>' +
                '<tr><th>Type:</th><td>' + this.mType + '</td></tr>' +
                '<tr><th>Size:</th><td>' + this.mSize + '</td></tr>' +
                '<tr><th>Alighment:</th><td>' + this.alignment + '</td></tr>' +
                '<tr><th>Legendary:</th><td>' + this.legendary + '</td></tr>' +
                '</table>' +
                '</div>';
            return cardTags;
        }
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

// 4. Create Function to sort through Monster List Array
function sortMonsterList(){
    monstersList.sort(function(a, b){
        if(a.mName.toLowerCase() < b.mName.toLowerCase()) return -1;
        if(a.mName.toLowerCase() > b.mName.toLowerCase()) return 1;
        return 0;
    });
}

// 4.1 Implement the sort function
sortMonsterList();


// 5. Function to grab card information using the method to provide a string of HTML data with array info
function getMonsterCardListData() {
    let output = '';
    monstersList.forEach(function (monster) {
        output = output + monster.makeCard();
    });
    return output;
}


// 6. Placing data into the HTML document using 'monster-card-stage' id tag
document.getElementById('monster-card-stage').innerHTML = getMonsterCardListData();


// 7.  Create CSS to make the page look a little cleaner


/**
 *          Creating Filtering Functions
 */














