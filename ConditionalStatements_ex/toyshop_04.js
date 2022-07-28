function toys(input){
    let price = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
//Цени на играчките:
//•	Пъзел - 2.60 лв.
//•	Говореща кукла - 3лв.
//•	Плюшено мече - 4.10 лв.
//•	Миньон - 8.20 лв.
//•	Камионче - 2лв.
    let totalProductPrice = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let totalToys = puzzles + dolls + bears + minions + trucks;
    if (totalToys >= 50){
    totalProductPrice-= totalProductPrice * 0.25;

}
    totalProductPrice -= totalProductPrice * 0.10;
    
    if(totalProductPrice >= price){
        console.log(`Yes! ${(totalProductPrice - price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(price - totalProductPrice).toFixed(2)} lv needed.`);
    }
    

}

toys(["320",
"8",
"2",
"5",
"5",
"1"])

