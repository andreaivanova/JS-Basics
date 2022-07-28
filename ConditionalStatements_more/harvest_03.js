function harvest(input) {
    let areaSquareMeters = Number(input[0]);
    let grapesPerSquareMeter = Number(input[1]);
    let neededLitersWine = Number(input[2]);
    let amountOfWorkers = Number(input[3]);
    let totalGrapes = areaSquareMeters * grapesPerSquareMeter;
    let wine = totalGrapes * 0.40 / 2.5;
    if (wine >= neededLitersWine){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - neededLitersWine)} liters left -> ${Math.ceil((wine - neededLitersWine) / amountOfWorkers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(neededLitersWine - wine)} liters wine needed.`);
    }






} harvest(['1020','1.5','425','4'])