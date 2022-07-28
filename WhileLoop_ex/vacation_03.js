function vacation(input) {
    let moneyNeededVacation = Number(input[0]);
    let disposableMoney = Number(input[1]);
    let index = 2;
    let saveOrSpend = input[index];
    index++;
    let sum = Number(input[index]);
    index++;
    let countFiveSpendingDays = 0;
    let countTotalDays = 0;
    let moneyIsEnough = true;
    while (disposableMoney < moneyNeededVacation) {
        if (countFiveSpendingDays === 5) {
            console.log(`You can't save the money.\n${countTotalDays}`);
            moneyIsEnough = false;
            break;
        }
        if (saveOrSpend === 'spend') {
            disposableMoney -= sum;
            countTotalDays++;
            countFiveSpendingDays++;
        } else if (saveOrSpend === 'save') {
            countFiveSpendingDays = 0;
            countTotalDays++;
            disposableMoney += sum;
        }
        if (disposableMoney < 0) {
            disposableMoney = 0;
        }




        saveOrSpend = input[index];
        index++;
        sum = Number(input[index]);
        index++;

    }
    if (moneyIsEnough) {
        console.log(`You saved the money for ${countTotalDays} days.`);
    }




}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


