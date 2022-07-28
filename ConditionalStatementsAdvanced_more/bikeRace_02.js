function bike(input){
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let typeRoad = input[2];
    let jTax = 0;
    let sTax = 0;
    if(typeRoad === 'trail'){
        jTax = 5.5;
        sTax = 7;
    } else if (typeRoad === 'cross-country'){
        jTax = 8;
        sTax = 9.5;
        if (juniors + seniors >= 50){
            jTax -= jTax * 0.25;
            sTax -= sTax * 0.25;
        }
        
    } else if (typeRoad === 'downhill'){
        jTax = 12.25;
        sTax = 13.75;
    } else if (typeRoad === 'road'){
        jTax = 20;
        sTax = 21.50;
    }
    let collectedSum = seniors * sTax + juniors * jTax;
    collectedSum -= collectedSum * 0.05;
    console.log(collectedSum.toFixed(2));







}
bike(['30','25','cross-country'])