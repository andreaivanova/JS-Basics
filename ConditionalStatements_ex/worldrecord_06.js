function swim(input){
    let recordSeconds = Number(input[0]);
    let rangeMeters = Number(input[1]);
    let timeSecondsPerMeter = Number(input[2]);

    let timeMustSwum = rangeMeters * timeSecondsPerMeter;
    let addedTime = Math.floor(rangeMeters / 15) * 12.5;
    let totalTime = timeMustSwum + addedTime;
    if(recordSeconds <= totalTime){
       console.log(`No, he failed! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`)
    } else {console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)}

}
swim(["55555.67",
"3017",
"5.03"])

