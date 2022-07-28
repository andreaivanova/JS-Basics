function newHouse(input) {
    let typeOfFlowers = input[0];
    let amountOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let priceOfFlowers = 0;
    let finalPrice = 0;
    switch (typeOfFlowers) {
        case 'Roses':
            priceOfFlowers = 5;
        
    
            break;
        case 'Dahlias':
            priceOfFlowers = 3.8;
            break;
        case 'Tulips':
            priceOfFlowers = 2.8;
            break;
        case 'Narcissus':
            priceOfFlowers = 3;
            break;
        case 'Gladiolus':
            priceOfFlowers = 2.5;
            break;


    }
    finalPrice = amountOfFlowers * priceOfFlowers;
    if (typeOfFlowers === 'Roses' && amountOfFlowers > 80){
        finalPrice -= finalPrice * 0.10;
    } else if (typeOfFlowers === 'Dahlias' && amountOfFlowers > 90){
        finalPrice -= finalPrice * 0.15;
    } else if (typeOfFlowers === 'Tulips' && amountOfFlowers > 80){
        finalPrice -= finalPrice * 0.15;
    } else if (typeOfFlowers === 'Narcissus' && amountOfFlowers < 120){
        finalPrice += finalPrice * 0.15;
    } else if (typeOfFlowers === "Gladiolus" && amountOfFlowers < 80){
        finalPrice += finalPrice * 0.20;
    }
    let diff = Math.abs(budget - finalPrice);
    if (budget >= finalPrice){
        console.log(`Hey, you have a great garden with ${amountOfFlowers} ${typeOfFlowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }




}
newHouse(["Narcissus",
"119",
"360"])
