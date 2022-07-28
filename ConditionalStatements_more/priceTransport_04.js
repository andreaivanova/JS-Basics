function transport(input) {
    let km = Number(input[0]);
    let dayOrNight = input[1];

    let tariff = 0;
    let price = 0;
    if (km < 20) {
        if (dayOrNight === 'day') {
            tariff = 0.79;
        } else if (dayOrNight === 'night') {
            tariff = 0.90;
        }
        price = 0.70 +  km * tariff;
    } else if (km < 100){
    
        price = km * 0.09;
    } else {
        price = km * 0.06;
    }
    console.log(price.toFixed(2));



}
transport(['180','night']);