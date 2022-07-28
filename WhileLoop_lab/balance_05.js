function accountBalance (input){
    let index = 0;
    let text = input[index];
    index++;
    let sum = 0;
    while (text !== 'NoMoreMoney'){
        text = Number(text);
        if (text < 0){
            console.log('Invalid operation!');
            break;
        }
        sum += text;
        console.log(`Increase: ${text.toFixed(2)}`);

        text = input[index];
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);


}
accountBalance(["5.51",

"69.42",

"100",

"NoMoreMoney"])
accountBalance(["120", "45.55", "-150"])