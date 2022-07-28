function tickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numberOfPeople = Number(input[2]);
    let ticketPrice = 0;

    let leftMoney = budget;
    if (numberOfPeople <= 4) {
        leftMoney -= budget * 0.75;
    } else if (numberOfPeople <= 9) {
        leftMoney -= budget * 0.60;
    } else if (numberOfPeople <= 24) {
        leftMoney -= budget * 0.50;
    } else if (numberOfPeople <= 49) {
        leftMoney -= budget * 0.40;
    } else {
        leftMoney -= budget * 0.25;
    }
    switch (category) {
        case 'VIP':
            ticketPrice = 499.99;

            break;
        case 'Normal':
            ticketPrice = 249.99;
            break;


    }
    let totalSumTickets = ticketPrice * numberOfPeople;
    let diff = Math.abs(leftMoney - totalSumTickets);
    if (totalSumTickets <= leftMoney){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }





}
tickets(['30000','VIP','49'])