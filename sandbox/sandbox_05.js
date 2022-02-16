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
    monstersList.forEach(function (monster) {                           //   <--!!! This will be replaced with
        output = output + monster.makeCard();                           // filterMonsterList
    });
    return output;
}


// 6. Placing data into the HTML document using 'monster-card-stage' id tag  <--Made into Function
function updateCards(){
    document.getElementById('monster-card-stage').innerHTML = getMonsterCardListData();
}

updateCards();
// 7.  Create CSS to make the page look a little cleaner


/**
 *          Creating Filtering Functions
 */
// 0. Create function to check the flag a monster

// 1. Create a filter by type function that finds objects with a specific type criteria
function filterByType(crit){
                                                                //   NOTE: I removed the hide all feature in all filters
    monstersList.forEach(function (monster){                    //   <--!!
        if(monster.mType === crit) console.log(monster.mName);
        if(monster.mType === crit) monster.flag = 'show'
    })

    updateCards();
}

// 2. Create filter by size function that finds objects with a specific size criteria
function filterBySize(crit){

    monstersList.forEach(function (monster){
        if(monster.mSize === crit) console.log(monster.mSize);
        if(monster.mSize === crit) monster.flag = 'show'
    })

    updateCards();
}

// 3.  Create filter by alignment function that finds objects with an alignment size criteria
function filterByAlignment(crit){

    monstersList.forEach(function (monster){
        if(monster.alignment === crit) console.log(monster.alignment);
        if(monster.alignment === crit) monster.flag = 'show'
    })

    updateCards();
}


// 4. Create filter by alignment function that finds objects with an alignment size criteria
function filterByLegendary(crit){

    monstersList.forEach(function (monster){
        if(monster.legendary === crit) console.log(monster.legendary);
        if(monster.legendary === crit) monster.flag = 'show'
    })

    updateCards();
}

// filterByLegendary(true);

// 5. Set up Temp vars to represent the inputs from a form
let mTypeSelection = 'humanoid';
let mSizeSelection = 'all';
let mAlignmentSelection = 'neutral good';
let mLegendarySelection = 'all';

// 6. Refactor previous filter functions and combine into one function with a series of filters
function filterCards(type, size, align, legend){
    let tempFilter

    if(type !== 'all' || size !== 'all'                         //   Must hide all flags is one filter is being
        || align !== 'all' || legend !== 'all') {               // called
        monstersList.forEach(function (monster){
            monster.flag = 'hide';
        });
    } else {
        monstersList.forEach(function (monster) {
            monster.flag = 'show';
        });
    }

    if (type !== 'all') {                                       //   Starting with the filter type... However, other
        console.log('made it to type');                         // filters will be ignored
        filterByType(type);
    }
    if (size !== 'all') {
            filterBySize(size);
        console.log('made it to size');
    }
    if (align !== 'all') {
            filterByAlignment(align);
        console.log('made it to align');
    }
    if (size !== 'all') {
        filterByLegendary(legend);
        console.log('made it to legend');
    }


}

filterCards(mTypeSelection,mSizeSelection,mAlignmentSelection,mLegendarySelection);


