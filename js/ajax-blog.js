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




// Will remove this in a minute
function getBlog(b, n){
    $('#blog-title').text(b[n].title);
    $('#blog-content').text(b[n].content);
    $('#blog-categories').text(b[n].categories[0]);
    $('#blog-date').text(b[n].date);
}


function scriptData(b, n){
    return '<article class="card">' +
        '            <header class="card-header h3">' +
                         b[n].title +
        '            </header>' +
        '            <div class="card-img">' +
        '                Random Picture here' +
        '            </div>' +
        '            <main class="p-3">' +
                         b[n].conent +
        '            </main>' +
        '            <aside>' +
        '                <ul class="list-group">' +
        '                    <li class="list-group-item list-group-item-dark font-weight-bold">' +
        '                        Categories' +
        '                    </li>' +
        '                    <li class="list-group-item list-group-item-action">' +
                                b[n].categories[0] +                                    // <--COME BACK TO THIS
        '                    </li>' +
        '                </ul>' +
        '            </aside>' +
        '            <footer class="card-footer text-center">' +
                         b[n].date +
        '            </footer>' +
        '        </article>'

}




$(document).ready(function() {


    $.get('data/blog.json').done(function(d){
        getBlog(d, 0)
    })












});