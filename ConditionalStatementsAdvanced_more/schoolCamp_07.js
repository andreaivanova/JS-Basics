function camp(input) {
    let season = input[0];
    let groupType = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);
    let pricePerNight = 0;
    let sportType = '';
    switch (season) {
        case 'Winter':
            if (groupType === 'girls' || groupType === 'boys') {
                pricePerNight = 9.60;
            } else if (groupType === 'mixed') {
                pricePerNight = 10;
            }

            if (groupType === 'girls') {
                sportType = 'Gymnastics';
            } else if (groupType === 'boys') {
                sportType = 'Judo';
            } else if (groupType === 'mixed') {
                sportType = 'Ski';
            }

            break;
        case 'Spring':
            if (groupType === 'girls' || groupType === 'boys') {
                pricePerNight = 7.20;
            } else if (groupType === 'mixed') {
                pricePerNight = 9.50;
            }

            if (groupType === 'girls') {
                sportType = 'Athletics';
            } else if (groupType === 'boys') {
                sportType = 'Tennis';
            } else if (groupType === 'mixed') {
                sportType = 'Cycling';
            }

            break;
        case 'Summer':
            if (groupType === 'girls' || groupType === 'boys') {
                pricePerNight = 15;
            } else if (groupType === 'mixed') {
                pricePerNight = 20;
            }
            if (groupType === 'girls') {
                sportType = 'Volleyball';
            } else if (groupType === 'boys') {
                sportType = 'Football';
            } else if (groupType === 'mixed') {
                sportType = 'Swimming';
            }


            break;


    }
    let totalNightsPrice = nights * pricePerNight * students;
    if (students >= 10 && students < 20) {
        totalNightsPrice -= totalNightsPrice * 0.05;
    } else if (students >= 20 && students < 50) {
        totalNightsPrice -= totalNightsPrice * 0.15;
    } else if (students >= 50) {
        totalNightsPrice -= totalNightsPrice * 0.5;
    }
    console.log(`${sportType} ${totalNightsPrice.toFixed(2)} lv.`);



}
camp(['Winter', 'mixed', '9', '15'])