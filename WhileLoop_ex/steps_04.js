function steps(input) {
    let goal = 10000;
    let index = 0;
    let inputText = input[index];
    index++;
    let currentSteps = 0;
    let totalWalkedSteps = 0;
    let flag = false;
    while (inputText !== 'Going home') {
        currentSteps = Number(inputText);
        totalWalkedSteps += currentSteps;
        if (totalWalkedSteps >= goal) {
            console.log(`Goal reached! Good job!\n${totalWalkedSteps - goal} steps over the goal!`);
            flag = true;
            break;
        }

        inputText = input[index];
        index++;
    }
    if (inputText === 'Going home') {
        inputText = Number(input[index]);
        index++;
    }
    totalWalkedSteps += inputText;
    if (totalWalkedSteps >= goal && !flag) {
        console.log(`Goal reached! Good job!\n${totalWalkedSteps - goal} steps over the goal!`);
    } else if (totalWalkedSteps < goal && !flag) {
        console.log(`${goal - totalWalkedSteps} more steps to reach goal.`);
    }


}
steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);
console.log(`-----`);
steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])



