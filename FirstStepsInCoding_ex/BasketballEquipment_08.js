function basketball(input) {
    let annualTax = Number(input[0]);
    let sneakers = annualTax - annualTax * 0.40;
    let gear = sneakers - sneakers * 0.20;
    let ball = gear * 1 / 4;
    let accessories = ball * 1 / 5;
    let totalPrice = annualTax + sneakers + gear + ball + accessories;
    console.log(totalPrice);



}
basketball(['365']);