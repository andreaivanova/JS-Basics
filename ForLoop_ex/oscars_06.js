function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let juryAmount = Number(input[index]);
    index++;
    let receivedPoints = 0;
    let flag = true;
    for (let i = 1; i <= juryAmount; i++) {
        let nameJury = input[index];
        index++;
        let pointsJury = input[index];
        index++;
        let textLength = nameJury.length;
        receivedPoints = (textLength * pointsJury) / 2;
        points += receivedPoints;
        if(points >= 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            flag = false;
            break;
        } 
    } 
    let diff = 1250.5 - points;
    if (flag){
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }


}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
