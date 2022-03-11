// AJAX BLOG INSTRUCTIONS:
// 1. Create a new html file called ajax-blog.html.
// 2. At minimum, your Ajax blog will need an empty
//    <div> with an id of posts.
// 3. Add your own Bootstrap theme to this file as well.
//    Feel free to use the same one as your store or
//    choose a different one.
// 4. Download blog.json to your data directory from before.
// 5. Use Ajax to load the contents of blog.json and add the
//    data from it to your #posts div.
// 6. Add additional entries to blog.json and make sure your
//    changes are reflected on the page.

(function() {
    "use strict";

    // Assigns HTML tags to the Obj data
    function scriptData(b, n){
        return '<article class="card mx-3 mb-4 blog-cards">' +
            '            <header class="card-header h3">' +
                             b[n].title +
            '            </header>' +
            '            <div id="days-spell" class="card-body">' +
                                        // spellScript()    +
            '            </div>' +
            '            <main class="p-3">' +
                             b[n].content +
            '            </main>' +
            '            <aside>' +
            '                <ul class="list-group">' +
            '                    <li class="list-group-item list-group-item-dark font-weight-bold">' +
            '                        Categories' +
            '                    </li>' +
            '                       <div id="blog-cat">' +
                                        loopThroughCat(b[n]) +
            '                       </div>' +
            '                </ul>' +
            '            </aside>' +
            '            <footer class="card-footer text-center">' +
                             b[n].date +
            '            </footer>' +
            '        </article>'

    }

    // Loops through all the Obj in the Array
    function loopThroughData(a){


        let output = '';
        for (let i = 0; i < a.length; i++) {
            output += scriptData(a, i);
        }
        return output;
    }

    // Loops deeper in the Cat Array... Output goes to scriptData
    function loopThroughCat(a){
        let output = ''
        for (let i = 0; i < a.categories.length; i++) {
            output +=
                '       <li class="list-group-item list-group-item-action">' +
                            a.categories[i] +
                '       </li>'
        }
        return output;
    }

    // Make Spell Script
    function spellScript(spellList){
        let numOfSpells = parseInt(getRandomNum(1, 10));
        let output = '';

        for (let i = 0; i < numOfSpells; i++) {
            let spellOfTheDay = parseInt(getRandomNum(1, 318));
            output += '<span>' + spellList.results[spellOfTheDay].name + '</span><br>';
        }
        return output
    }

    // Get D&D Spell Data
    function getRandomSpellList(){
        $.get('https://www.dnd5eapi.co/api/spells').done(function (d){
            return d;
        })
    }

    // Will Use this to get a random spell selections
    function getRandomNum(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Runs the loop and inputs into blog-container
    function runBlogSite(){
        $.get('data/blog.json').done(function(d){
            let spellList = getRandomSpellList();
            $('#blog-container').html(loopThroughData(d));

        })
    }

    // Start
    runBlogSite();

    // $('#days-spell').html(getRandomSpell());

})();