function holiday(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let accomodation = '';
    let destination = '';
    let price = 0;

    if (budget <= 1000) {
        accomodation = 'Camp';
        switch (season) {
            case 'Summer':
                destination = 'Alaska';
                price = budget * 0.65;
                break;

            case 'Winter':
                destination = 'Morocco';
                price = budget * 0.45;
                break;
        }
    } else if (budget <= 3000) {
        accomodation = 'Hut';
        switch (season) {
            case 'Summer':
                destination = 'Alaska';
                price = budget * 0.80;
                break;

            case 'Winter':
                destination = 'Morocco';
                price = budget * 0.60;
                break;
        }
    } else {
        accomodation = 'Hotel';
        price = budget * 0.90;
        switch (season) {
            case 'Summer':
                destination = 'Alaska';
                break;

            case 'Winter':
                destination = 'Morocco';
                break;
        }
    }
    console.log(`${destination} - ${accomodation} - ${price.toFixed(2)}`)


}
holiday(['800', 'Summer'])