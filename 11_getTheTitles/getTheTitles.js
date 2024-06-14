const getTheTitles = function(books) {
    let bookTitles = [];
    for(let key in books){
        if(!books[key].title){
            continue;
        }
        bookTitles.push(books[key].title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
