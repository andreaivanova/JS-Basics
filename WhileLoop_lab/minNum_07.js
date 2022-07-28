function minNum(input){
    let index = 0;
    let currentInput = input[index];
    index++;
    let minNumber =  Number.MAX_SAFE_INTEGER;
    while(currentInput !== 'Stop'){
        currentInput = Number(currentInput);
        if (minNumber > currentInput){
            minNumber = currentInput;
        }

        currentInput = input[index];
        index++;
    }
console.log(minNumber);
}

minNum(["-10", "20", "-30", "Stop"])
minNum(["45", "-20", "7", "99", "Stop"])
minNum(["999", "Stop"])
minNum(["-1", "-2", "Stop"])
