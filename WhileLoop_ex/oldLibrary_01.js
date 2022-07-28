function oldBooks(input){
    let wantedBook = input[0];
    let index = 1;
    let count = 0;
    let isFound = false;

    let book = input[index];
    index++;
    while(book !== 'No More Books'){
        if (book === wantedBook){
            isFound = true;
            break;
        }
        count++;
        book = input[index];
        index++;
    }
    if (isFound){
        console.log(`You checked ${count} books and found it.`);
    } else {
        console.log("The book you search is not here!\n" + `You checked ${count} books.`);
    }

    
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

