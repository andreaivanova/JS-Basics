function market(input){
    let priceKgVeg = Number(input[0]);
    let priceKgFr = Number(input[1]);
    let totalKgVeg = Number(input[2]);
    let totalKgFr = Number(input[3]);
    let totalPriceBGN = priceKgVeg * totalKgVeg + priceKgFr * totalKgFr;
    let totalPriceEuro = totalPriceBGN / 1.94;
    console.log(totalPriceEuro.toFixed(2));


}
market(['0.194','19.4','10','10']);