function pets (input){
    let daysMissing = Number(input[0]);
    let leftFoodKg = Number(input[1]);
    let dogKgPerDay = Number(input[2]);
    let catKgPerDay = Number(input[3]);
    let turtleGramsPerDay = Number(input[4]);
    let totalNeededFood = daysMissing * dogKgPerDay + daysMissing * catKgPerDay + daysMissing * turtleGramsPerDay / 1000;
    if (totalNeededFood <= leftFoodKg){
        console.log(`${Math.floor(leftFoodKg - totalNeededFood)} kilos of food left.`);
    } else{
        console.log(`${Math.ceil(totalNeededFood - leftFoodKg)} more kilos of food are needed.`);
    }


}
pets(['5','10','2.1','0.8','321'])