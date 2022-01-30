(function() {
    "use strict";

    /**
     * 1. TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {};
    person.firstName = "Jason";
    person.lastName = "Cameron";

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * 2. TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        console.log("Hello from " + this.firstName + " " + this.lastName);
    }

    person.sayHello();

    /** 3. TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper){
        console.log(shopper.name, shopper.amount);
    });

    /** 4. TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "MistBorn",
            subTitle: "The Last Empire",
            author: {
                firstName: "Brandon",
                lastName: "Sanderson"
            },
            publishDate: "July 17, 2006",
            genre: ["Fantasy Fiction", "Novel", "High fantasy"]
        },
        {
            title: "Two Necromancers, a Bureaucrat, and an Elf",
            subTitle: "Unconventional Heroes",
            author: {
                firstName: "L.G.",
                lastName: "Estrella"
            },
            publishDate: "July 18, 2014",
            genre: ["Fantasy Fiction", "Young Adult", "Humor"]
        },
        {
            title: "Harry Potter",
            subTitle: "Scorer's Stone",
            author: {
                firstName: "J. K.",
                lastName: "Rowling"
            },
            publishDate: "June 26, 1997",
            genre: ["Fantasy Fiction", "Young Adult"]
        },
        {
            title: "Super Powereds",
            series: "Year One",
            author: {
                firstName: "Drew.",
                lastName: "Hayes"
            },
            publishDate: "October 13, 2013",
            genre: ["Fantasy Fiction", "Superhero Fiction", "Science Fiction", "Adventure Fantasy", "Young Adult"]
        },
        {
            title: "Spellmonger",
            series: "Book One Of The Spellmonger Series",
            author: {
                firstName: "Terry",
                lastName: "Mancour"
            },
            publishDate: "March 1, 2011",
            genre: ["Fantasy Fiction", "Adventure Fantasy", "Epic Fantasy", "High Fantasy"]
        }
    ]

    console.log(books[0].title);
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    console.log(books[4].title);
    console.log(books[4].author.firstName)
    console.log(books[4].author.lastName)

    /**
     * 5. TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:                              //   Looking at the example helped a lot!
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book){
        console.log("Book # " + books.indexOf(book));           //   <- This took some time to figure out!!!
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---")
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // Making the books array Obj easier (for now)
    let books2 = [
            {
                title: "Cat in the Hat",
                author: "Dr. Sues"
            },
            {
                title: "Where the Wild Things Are",
                author: "Maurice Sendak"
            },
            {
                title:  "Where the Sidewalk Ends",
                author: "Shel Silverstein"
            }
        ]


    // Show all books function
    function showAllBooks(){
        books2.forEach(function (book){
            console.log(book);
        });
    }


    // for the function, I didn't like calling it 'createBook' since we're adding to the array
    function addBooks(title, author){

        let book = {                                //   First needed to creat an object inside the function
            title: title,
            author: author
        }

        books2.push(book);                          //   Then push it to the end of the array

    }

    showAllBooks();

    console.log("---------")

    addBooks("Sam I Am", "New Sues");   //   Test the function and IT Works!

    showAllBooks();

})();