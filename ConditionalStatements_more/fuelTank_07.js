function fuel(input) {
    let text = input[0];
    let num = Number(input[1]);
    if (text === "Diesel") {
        if (num < 25) {
            console.log('Fill your tank with diesel!');
        } else {
            console.log('You have enough diesel.');
        }
    } else if (text === "Gasoline") {
        if (num < 25) {
            console.log('Fill your tank with gasoline!');
        } else {
            console.log('You have enough gasoline.');
        }
    } else if (text === "Gas"){
        if (num < 25) {
            console.log('Fill your tank with gas!');
        } else {
            console.log('You have enough gas.');
        }
    } else {
        console.log('Invalid fuel!');
    }


}
fuel(['Benzin', '3'])