function tennis(input){
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let points = Number(input[index]);
    index++;
    let acquiredPoints = 0;
    let totalMatches = 0;
    let wonMatches = 0;
   
     for (let i = 1; i <= tournaments; i++) {
        let stage = input[index];
        index++;
        totalMatches++;
        if (stage === 'W'){
            points += 2000;
            acquiredPoints += 2000;
            wonMatches++;
        } else if (stage === 'F'){
            points += 1200;
            acquiredPoints += 1200;
        } else if (stage === 'SF'){
            points += 720;
            acquiredPoints += 720;
        }
     }
     let averagePoints = Math.floor(acquiredPoints / totalMatches);
     let wonMatchesPercent = wonMatches / totalMatches * 100;
     console.log(`Final points: ${points}\nAverage points: ${averagePoints}\n${wonMatchesPercent.toFixed(2)}%`);

}
tennis(["4",
"750",
"SF",
"W",
"SF",
"W"])
