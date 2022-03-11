(function() {
    "use strict";

    // 1. Create an AJAX GET request for the file under data/inventory.json
    // 2. Your online tool store should load data from the JSON file using a
    //    get request and append the data to the table. You will need to use
    //    either $.ajax() or $.get(), and a .done() callback.
    // 3. Add some new entries to inventory.json and see how the data on the
    //    page gets updated.
    // 4. Add a "Refresh" button that will load inventory.json for you without
    //    having to refresh the entire page.
    // 5. Add Twitter Bootstrap to your online store with some custom CSS to
    //    make the style your own.

    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements


    // Apply HTML tags to JSON Obj
    function scriptData(n, i){
        let output = '<tr>' +
            '        <td class="pl-3">' + n[i].title + '</td>' +
            '        <td>' + n[i].quantity + '</td>' +
            '        <td>' + loopThroughCat(n[i].categories) + '</td>' +
            '        <td>$' + n[i].price + '</td>' +
            '      </tr>'
        return output
    }

    // Loops through JSON Array of Obj
    function loopThroughData(a){
        let output = '';
        for (let i = 0; i < a.length; i++) {
            output = output + scriptData(a, i)
        }
        return output;
    }

    // Loops through Category Array in JSON    <--- Pretty (^_^)
    function loopThroughCat(a){
        let output = '';
        if (a.length > 1){
            for (let i = 0; i < a.length; i++) {
                if (i < a.length - 1){
                    output += a[i] + ' | ';
                } else {
                    output += a[i];
                }
            }
        } else {
            output = a[0];
        }
        return output;
    }

    // Applied whole table HTML tags...   <--- BECAUSE Bootstrap is Dumb and wouldn't apply style to JS ingested data
    function wholeScriptData(n){
        let output =
            '  <table class="table">' +
            '    <thead>' +
            '      <tr>' +
            '        <th class="pl-3">Title</th>' +
            '        <th>Quantity</th>' +
            '        <th>Categories</th>' +
            '        <th>Price</th>' +
            '      </tr>' +
            '    </thead>' +
            '    <tbody>' +
            n +
            '    </tbody>' +
            '  </table>';
        return output;

    }

    // Reaches out to JSON and grabs inventory data
    function getInventory(){
        $.get('data/inventory.json').done(function(data) {
            $('#p').html( wholeScriptData(loopThroughData(data)));
            $('thead>tr').addClass('h5');
            $('tbody>tr:even').css('background-color', 'rgba(190,190,190,0.58)');
        });
    }

    // Calls Data on Page Load
    getInventory();

    // Button Call to refresh Data
    $('#refresh-btn').click(function (){
        getInventory();
    })

})();