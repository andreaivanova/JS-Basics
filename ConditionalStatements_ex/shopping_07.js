function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let RAM = Number(input[3]);
//     Ако броя на видеокартите е по-голям от този на процесорите 
//получава 15% отстъпка от крайната сметка. Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
let videoCardsSum = videoCards * 250;
let processorsPrice = videoCardsSum * 0.35;
let processorsSum = processorsPrice * processors;
let RAMPrice = videoCardsSum * 0.10;
let ramSum = RAMPrice * RAM;
let totalSum = videoCardsSum + processorsSum + ramSum;
if (videoCards > processors){
    totalSum -= totalSum * 0.15;
}

if (totalSum <= budget){
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
} else  {
    console.log(`Not enough money! You need ${Math.abs(budget - totalSum).toFixed(2)} leva more!`);
}



}
shopping(["920.45",
"3",
"1",
"1"])
