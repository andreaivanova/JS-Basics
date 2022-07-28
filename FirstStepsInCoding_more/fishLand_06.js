function fish(input) {
    let skumriqPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPrice = skumriqPrice + skumriqPrice * 0.60;
    let safridPrice = cacaPrice + cacaPrice * 0.80;
    let palamudSum = palamudKg * palamudPrice;
    let safridSum = safridKg * safridPrice;
    let midiSum = midiKg * 7.50;
    let totalSum = palamudSum + safridSum + midiSum;
    console.log(totalSum.toFixed(2));

} fish(['6.90','4.20','1.5','2.5','1']);