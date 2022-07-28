function lunch(input) {
    let name = input[0];
    let durationEpisode = Number(input[1]);
    let durationBreak = Number(input[2]);
    let timeForLunch = durationBreak * 1 / 8;
    let timeForRelax = durationBreak * 1 / 4;
    let timeLeft = durationBreak - timeForLunch - timeForRelax;
    if (timeLeft >= durationEpisode) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - durationEpisode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(durationEpisode - timeLeft)} more minutes.`);
    }



}
lunch(["Teen Wolf",
    "48",
    "60"])
