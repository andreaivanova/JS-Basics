function reportSystem(input) {
    let collectedSum = Number(input[0]);
    let index = 1;
    let inputedString = input[index];
    index++;
    let price = 0;
    let withCash = 0;
    let byCreditcard = 0;
    let count = 0;
    let totalSum = 0;
    let countCreditcard = 0;
    let countCash = 0;
    while (inputedString !== 'End') {
        price = Number(inputedString);
        count++;
        if (count % 2 === 0) {
            // by credit card
            if (price < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log('Product sold!');
                byCreditcard += price;
                totalSum += price;
                countCreditcard++;
            }

        } else {

            if (price > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log('Product sold!');
                withCash += price;
                totalSum += price;
                countCash++;
            }
            //with cash
        }
        if (totalSum >= collectedSum){
            console.log(`Average CS: ${(withCash / countCash).toFixed(2)}`);
            console.log(`Average CC: ${(byCreditcard / countCreditcard).toFixed(2)}`);
            break;
        }


        inputedString = input[index];
        index++;
    }
    if(inputedString === 'End'){
        console.log('Failed to collect required money for charity.');
    }


}
reportSystem([
'500',
'120',
'8',
'63',
'256',
'78',
'317',
])
reportSystem(['600','86','150','98','227','End'])