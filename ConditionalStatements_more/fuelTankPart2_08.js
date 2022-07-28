function fuel(input) {
    let type = input[0];
    let quantity = Number(input[1]);
    let clubCardPossesssion = input[2];
    let price = 0;

    if (type === 'Gasoline') {
        if (clubCardPossesssion === 'Yes') {
            price = 2.04;
        } else if (clubCardPossesssion === "No") {
            price = 2.22;
        }
    } else if (type === 'Gas') {
        if (clubCardPossesssion === 'Yes') {
            price = 0.85;
        } else if (clubCardPossesssion === 'No') {
            price = 0.93;
        }
    } else if (type === "Diesel") {
        if (clubCardPossesssion === 'Yes') {
            price = 2.21;
        } else if (clubCardPossesssion === 'No') {
            price = 2.33;
        }
    }

    let totalPrice = price * quantity;
    if (quantity >= 20 && quantity <= 25) {
        totalPrice -= totalPrice * 0.08;
    } else if (quantity > 25){
        totalPrice -= totalPrice * 0.10;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);



}
fuel(['Diesel', '19', 'No'])