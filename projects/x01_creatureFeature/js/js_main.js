(function(){
/**
 * Monster
 */
let monsterList = [                                         //   Array of objects
    {
        name: 'Phoenix',
        type: 'Fire',
    },
    {
        name: 'Rockilla',
        type: 'Earth',
    },
    {
        name: 'Uriel the Divine',
        type: 'Wind',
    },
    {
        name: 'Musu',
        type: 'Water',
    }
];

function convertHTMLMonsterCard() {

    monsterList.forEach(function (monster){  //   Add the HTML tags to
        monster.name = '<h3>' + monster.name + '</h3>'              // the MonsterList
        monster.type = '<p>' + monster.type + '</p>'
    });

    let monstersString = monsterList.map(function(monster){    //   Convert into string
        return '\'<div class="card show-toggle">'                   //   Add .div class "card show-toggle" , for each
            + monster.name + monster.type + '</div>';               // monster card
    });

    return monstersString.join("");                    //   Convert all into final string
}

function addMonster(name, type){
    let monster = {
        name: name,
        type, type
    }
    monsterList.push(monster);
}

    console.log("---------------");

let tableContainer = document.getElementsByClassName('table-container');


})();



