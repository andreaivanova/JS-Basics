function driver(input) {
    let season = input[0];
    let km = Number(input[1]);
    let pricePerKm = 0;
    if (km <= 5000) {
        switch (season) {
            case 'Spring':
            case 'Autumn':
                pricePerKm = 0.75;
                break;
            case 'Summer':
                pricePerKm = 0.90;
                break;
            case 'Winter':
                pricePerKm = 1.05;
                break;
        }
    } else if (km <= 10000) {
        switch (season) {
            case 'Spring':
            case 'Autumn':
                pricePerKm = 0.95;
                break;
            case 'Summer':
                pricePerKm = 1.10;
                break;
            case 'Winter':
                pricePerKm = 1.25;
                break;
        }
    } else if (km <= 20000) {
        pricePerKm = 1.45;
    }
    let salary = km * pricePerKm * 4; //  4  - 4 months is each season
    salary -= salary * 0.10;
    console.log(salary.toFixed(2));


}
driver(['Summer', '3455'])