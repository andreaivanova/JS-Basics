function food(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veganPrice = veganMenu * 8.15;
    let totalPrice = chickenPrice + fishPrice + veganPrice;
    let dessertPrice = totalPrice * 0.20;
    let totalSumDelivery = totalPrice + dessertPrice + 2.50;
    console.log(totalSumDelivery);
}
food(['2', '4', '3']);