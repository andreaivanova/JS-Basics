function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let accomodation = '';
    let spentMoney = 0;

    if (season === 'summer') {

        if (budget <= 100) {
            accomodation = 'Camp';
            destination = 'Bulgaria';
            spentMoney = budget * 0.30;
        } else if (budget <= 1000) {
            accomodation = 'Camp';
            destination = 'Balkans';
            spentMoney = budget * 0.40;
        } else {
            accomodation = 'Hotel';
            destination = 'Europe';
            spentMoney = budget * 0.90;
        }
        
    } else if (season === 'winter') {
        accomodation = 'Hotel';
        if (budget <= 100) {
            destination = 'Bulgaria';
            spentMoney = budget * 0.70;
        } else if (budget <= 1000) {
            destination = 'Balkans';
            spentMoney = budget * 0.80;
        } else {
            destination = 'Europe'
            spentMoney = budget * 0.90;
        }
    }

    console.log(`Somewhere in ${destination}\n${accomodation} - ${spentMoney.toFixed(2)}`);





}
journey(["678.53", "winter"])