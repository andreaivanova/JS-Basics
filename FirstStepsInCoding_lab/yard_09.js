function yard(input) {
    let squareMeters = Number(input[0]);
    let greenYard = squareMeters * 7.61;
    greenYard -= greenYard * 0.18;
    console.log(`The final price is: ${greenYard} lv.\nThe discount is: ${squareMeters * 7.61 * 0.18} lv.`)



}
yard(['550']);