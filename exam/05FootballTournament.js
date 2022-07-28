function footballTournament(input) {
    let index = 0;
    let team = input[index];
    index++;
    let numOfGames = Number(input[index]);
    index++;
    let gameResult = input[index];
    index++;
    let countGames = 0;
    let countW = 0;
    let countL = 0;
    let countD = 0;
    let totalPoints = 0;
    if (numOfGames === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        while (countGames <= numOfGames) {
            if (gameResult === 'W') {
                countW++;
                totalPoints += 3;
            } else if (gameResult === 'D') {
                countD++;
                totalPoints += 1
            } else if (gameResult === 'L') {
                countL++;
            }


            gameResult = input[index];
            index++;
            countGames++;
        }
        console.log(`${team} has won ${totalPoints} points during this season.\nTotal stats:\n## W: ${countW}\n## D: ${countD}\n## L: ${countL}\nWin rate: ${((countW / numOfGames) * 100).toFixed(2)}%`);
    }




}
footballTournament(["Barcelona",
"7",
"W",
"D",
"L",
"L",
"W",
"W",
"D"])