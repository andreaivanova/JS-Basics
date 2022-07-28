function coffee(input) {
    let beverage = input[0];
    let sugar = input[1];
    let amount = Number(input[2]);
    let totalPrice = 0;

    switch (beverage) {
        case 'Espresso':
            if (sugar === 'Without'){
                totalPrice = 0.9 * amount;
            }else if(sugar === 'Normal'){
                totalPrice = 1 * amount;
            } else if(sugar === 'Extra'){
                totalPrice = 1.2 * amount;
            }
            break;
        case 'Cappuccino':
            if (sugar === 'Without'){
                totalPrice = 1 * amount;
            }else if(sugar === 'Normal'){
                totalPrice = 1.20 * amount;
            } else if(sugar === 'Extra'){
                totalPrice = 1.6 * amount;
            }
            break;
        case 'Tea':
            if (sugar === 'Without'){
                totalPrice = 0.5 * amount;
            }else if(sugar === 'Normal'){
                totalPrice = 0.6 * amount;
            } else if(sugar === 'Extra'){
                totalPrice = 0.7 * amount;
            }
            break;

    }
    if (sugar === 'Without'){
        totalPrice -= totalPrice * 0.35;
    } 
    if (beverage === 'Espresso' && amount >= 5){
        totalPrice -= totalPrice * 0.25;
    } 
     if (totalPrice > 15){
        totalPrice -= totalPrice * 0.20;
    }
    console.log(`You bought ${amount} cups of ${beverage} for ${totalPrice.toFixed(2)} lv.`);

}
coffee(["Cappuccino",
"Normal",
"13"])

