function seconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    let totalTime = timeFirst + timeSecond + timeThird;
    let totalMin = Math.floor(totalTime / 60);
    let totalSec = totalTime % 60;
    if (totalSec < 10){
        console.log(`${totalMin}:0${totalSec}`);
    } else {
        console.log(`${totalMin}:${totalSec}`);
    }



}
seconds(["50", "50", "49"])