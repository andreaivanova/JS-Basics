function text(input){
    let index = 0;
    let text = input[index];
    while (text !== 'Stop'){
        console.log(text);
        index++;
        text = input[index];

    }

}
text(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

