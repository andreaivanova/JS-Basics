function petshop(input) {
    let amountPackagesDogs = Number(input[0]);
    let amountPackagesCats = Number(input[1]);
    let totalDogs = amountPackagesDogs * 2.50;
    let totalCats = amountPackagesCats * 4;
    let totalSum = totalDogs + totalCats;
    console.log(`${totalSum}  lv.`)



}
petshop(['5', '4']);