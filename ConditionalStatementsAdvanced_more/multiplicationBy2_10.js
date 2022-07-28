function multiply(input){
    let index = 0;
    let number = Number(input[index]);
    let result = 0;
    while(number >= 0){
        result = number * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        index++;
        number = Number(input[index]);
    }
    if (number < 0){
        console.log('Negative number!');
    }


}
multiply()