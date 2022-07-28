function dishwasher(input) {
    let bottles = Number(input[0]);
    let index = 1;
    let inputedString = input[index];
    index++;
    let vessels = 0;
    let amountDetergent = bottles * 750;
    let count = 0;
    let pots = 0;
    let dishes = 0;
    while (inputedString !== 'End') {
        vessels = Number(inputedString);
        count++;
        if (count % 3 === 0) {
            pots += vessels;
            amountDetergent -= (vessels * 15);
        } else {
            dishes += vessels;
            amountDetergent -= (vessels * 5);
        }
         if (amountDetergent < 0){
             console.log(`Not enough detergent, ${Math.abs(amountDetergent)} ml. more necessary!`);
             break;
         }

        inputedString = input[index];
        index++;
    }
    if (inputedString === 'End') {

        console.log('Detergent was enough!');
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${amountDetergent} ml.`);
    }


}
dishwasher([
    '1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30',
])