function deposit(input) {
    let depositedSum = Number(input[0]);
    let deadendDeposit = Number(input[1]);
    let percent = Number(input[2]);

    let interest = depositedSum * percent / 100;
    let interestPerMonth = interest / 12;
    let totalSum = depositedSum + deadendDeposit * interestPerMonth;
    console.log(totalSum)


}
deposit(['1000', '12', '3.2']);