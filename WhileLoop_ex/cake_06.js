function cake (input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let totalPieces = width * length;
    let index = 2;
    let inputText = input[index];
    index++;
    let eatenPieces = 0;
    let isEaten = false;
    while(inputText !== 'STOP'){
        eatenPieces = Number(inputText);
        totalPieces -= eatenPieces;
        if (totalPieces < 0){
            isEaten = true;
            break;
        }
        

        inputText = input[index];
        index++;
    }
    if (isEaten){
        console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
        
    } else if (inputText === 'STOP'){

        console.log(`${totalPieces} pieces are left.`);
    }


}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
