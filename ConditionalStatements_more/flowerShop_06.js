function flower (input){
    let magnolii = Number(input[0]);
    let zyumbyuli = Number(input[1]);
    let rozi = Number(input[2]);
    let kaktusi = Number(input[3]);
    let pricePresent = Number(input[4]);

    // •	Магнолии – 3.25 лева
    // •	Зюмбюли – 4 лева
    // •	Рози – 3.50 лева
    // •	Кактуси – 8 лева
    // От общата сума, Мария трябва да плати 5% данъци.
    let totalRevenue = magnolii * 3.25 + zyumbyuli * 4 + rozi * 3.5 + kaktusi * 8;
    totalRevenue -= totalRevenue * 0.05;
    if (totalRevenue < pricePresent){
      console.log(`She will have to borrow ${Math.ceil(pricePresent - totalRevenue)} leva.`); 
    } else {
        console.log(`She is left with ${Math.floor(totalRevenue - pricePresent)} leva.`);
    }

    



}
flower(['2','3','5','1','50'])