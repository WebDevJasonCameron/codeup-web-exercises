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


    function scriptData(n){
        let output;
        output = '<tr id="products">' +
            '        <td class="pl-3">' + n[0].title + '</td>' +
            '        <td>' + n[0].quantity + '</td>' +
            '        <td>' + n[0].categories + '</td>' +
            '        <td>' + n[0].price + '</td>' +
            '      </tr>'
        return output;
    }


    function getInventory(){
        $.get('data/inventory.json').done(function(data) {

            console.log(scriptData(data));
            $('#products').html( scriptData(data))


        });
    }

    getInventory();



})();