function trekking(input){
    let index = 0;
    let numberOfGroups = Number(input[index]);
    index++;
    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;
     for (let i = 1; i <= numberOfGroups ; i++) {
        let numberOfPeople = Number(input[index]);
        index++;
        totalPeople += numberOfPeople;
        if (numberOfPeople <= 5){
            musala += numberOfPeople;
        } else if (numberOfPeople <= 12){
           montblanc += numberOfPeople;
        } else if (numberOfPeople <= 25){
            kilimanjaro += numberOfPeople;
        } else if (numberOfPeople <= 40){
            k2 += numberOfPeople;
        } else {
            everest+= numberOfPeople;
        }


     }
     let musalaPercent = musala / totalPeople * 100;
     let montblancPercent = montblanc / totalPeople * 100;
     let kilimanjaroPercent = kilimanjaro / totalPeople * 100;
     let k2Percent = k2 / totalPeople * 100;
     let everestPercent = everest / totalPeople * 100;
     console.log(`${musalaPercent.toFixed(2)}%\n${montblancPercent.toFixed(2)}%\n${kilimanjaroPercent.toFixed(2)}%\n${k2Percent.toFixed(2)}%\n${everestPercent.toFixed(2)}%`);

}
trekking(["5",
"25",
"41",
"31",
"250",
"6"])
