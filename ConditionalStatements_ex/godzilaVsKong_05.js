function movie (input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothingPrice = Number(input[2]);
    let decorPrice = budget * 0.10;
    let clothingSum = statists * clothingPrice;
    if (statists > 150){
        clothingSum -= clothingSum * 0.10;
    }
    let totalSumMovie = clothingSum + decorPrice;
    if (totalSumMovie <= budget){
        console.log(`Action!\nWingard starts filming with ${(budget-totalSumMovie).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!\nWingard needs ${Math.abs(budget-totalSumMovie).toFixed(2)} leva more.`);
    }

}
movie(["15437.62",
"186",
"57.99"])
