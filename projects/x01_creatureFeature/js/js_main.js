/**
 * Monsters
 */
let monsterList = [
    {
        tagIntro: '<div className="card show-toggle">',
        name: 'Phoenix',
        type: 'Fire',
        tagOutro: '</div>'
    },
    {
        tagIntro: '<div className="card show-toggle">',
        name: 'Rockilla',
        type: 'Earth',
        tagOutro: '</div>'
    },
    {
        tagIntro: '<div className="card show-toggle">',
        name: 'Uriel the Divine',
        type: 'Wind',
        tagOutro: '</div>'
    },
    {
        tagIntro: '<div className="card show-toggle">',
        name: 'Musu',
        type: 'Water',
        tagOutro: '</div>'
    }
];

// for (let i = 0; i < monsterList.length; i++) {
//     monsterList[i].name.map(function (monName){
//         return '<h3>' + monName + '</h3>';
//     });
//     monsterList[i].type.map(function (montype){
//         return '<p>' + type + '</p>';
//     })
// }

monsterList.forEach(function (monster){
    monster.name = '<h3>' + monster.name + '</h3>'
    monster.type = '<p>' + monster.type + '</p>'
})






