function ski(input) {
    let days = Number(input[0]);
    let typeAccomodation = input[1];
    let grade = input[2];
    let nights = days - 1;
    let pricePerNight = 0;
    let totalPrice = 0;
    switch (typeAccomodation) {
        case 'room for one person':
            pricePerNight = 18;
            totalPrice = pricePerNight * nights;
            break;
        case 'apartment':
            pricePerNight = 25;
            totalPrice = pricePerNight * nights;
            if (days < 10) {
                totalPrice -= totalPrice * 0.30;
            } else if (days <= 15) {
                totalPrice -= totalPrice * 0.35;
            } else {
                totalPrice -= totalPrice * 0.50;
            }
            break;
        case 'president apartment':
            pricePerNight = 35;
            totalPrice = pricePerNight * nights;
            if (days < 10) {
                totalPrice -= totalPrice * 0.10;
            } else if (days <= 15) {
                totalPrice -= totalPrice * 0.15;
            } else {
                totalPrice -= totalPrice * 0.20;
            }
            break;

    }
    if (grade === 'positive'){
        totalPrice += totalPrice * 0.25;
    } else if (grade === 'negative'){
        totalPrice -= totalPrice * 0.10;
    }
    console.log(`${totalPrice.toFixed(2)}`);




}
ski(["2",
"apartment",
"positive"])

