function cat(input) {
    let daysOff = Number(input[0]);
    let playDaysOff = daysOff * 127;
    let playWorkDays = (365 - daysOff) * 63;
    let totalPlay = playDaysOff + playWorkDays;
    let difference = Math.abs(30000 - totalPlay);
    let totalHours = Math.floor(difference / 60);
    let totalMin = difference % 60;
    
    if (totalPlay <= 30000){
        console.log('Tom sleeps well');
        console.log(`${totalHours} hours and ${totalMin} minutes less for play`);
    } else {
        console.log('Tom will run away');
        console.log(`${totalHours} hours and ${totalMin} minutes more for play`);
    }



}
cat(['113'])