function paint(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let liquid = Number(input[2]);
    let hours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + (paint * 0.10)) * 14.50;
    let liquidSum = liquid * 5;
    let totalSum = nylonSum + paintSum + liquidSum + 0.40;
    let finalSumPeople = totalSum * 0.30 * hours;
    let finalSum = totalSum + finalSumPeople;
    console.log(finalSum);



}
paint(['10', '11', '4', '8']);