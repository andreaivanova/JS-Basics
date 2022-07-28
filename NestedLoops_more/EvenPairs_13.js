function evenPairs(input) {
    let startPointFirstPair = Number(input[0]);
    let startPointSecondPair = Number(input[1]);
    let diffFirstPair = Number(input[2]);
    let diffSecondPair = Number(input[3]);

    let endPointFirstPair = startPointFirstPair + diffFirstPair;
    let endPointSecondPair = startPointSecondPair + diffSecondPair;
    for (let i = startPointFirstPair; i <= endPointFirstPair; i++) {
        for (let j = startPointSecondPair; j <= endPointSecondPair; j++) {
            if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 9 != 0 && j % 2 != 0 && j % 3 != 0 && j % 5 != 0 && j % 7 != 0 && j % 9 != 0){
                console.log(`${i}${j}`);
            }
        }
    }



}
evenPairs(['10','30','9','6']);