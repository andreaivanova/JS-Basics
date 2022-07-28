function flower(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isItAHoliday = input[4];
    let chrPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch (season) {
        case 'Spring':
        case 'Summer':
            chrPrice = 2;
            rosesPrice = 4.10;
            tulipsPrice = 2.5;
            break;
        case 'Autumn':
        case 'Winter':
            chrPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
    }
    let totalFlowersSum = chrysanthemums * chrPrice + roses * rosesPrice + tulips * tulipsPrice;
    if (isItAHoliday === 'Y') {
        totalFlowersSum += totalFlowersSum * 0.15;
    }
    if (tulips >= 7 && season === 'Spring') {
        totalFlowersSum -= totalFlowersSum * 0.05;
    }
    if (roses >= 10 && season === 'Winter') {
        totalFlowersSum -= totalFlowersSum * 0.10;
    }
    if (roses + tulips + chrysanthemums > 20) {
        totalFlowersSum -= totalFlowersSum * 0.20;
    }
    totalFlowersSum += 2; //такса за аранжиране
    console.log(totalFlowersSum.toFixed(2));




}
flower(['2', '4', '8', 'Spring', 'Y'])