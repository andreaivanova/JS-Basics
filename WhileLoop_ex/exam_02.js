function exam(input) {
    let amountOfPoorGrades = Number(input[0]);
    let index = 1;
    let inputText = input[index];
    index++;
    let currentGrade = Number(input[index]);
    index++;
    let countPoorGrades = 0;
    let hasFailed = false;
    let sumAllGrades = 0;
    let countAllProblems = 0;
    let lastProblem = '';

    while (inputText !== 'Enough') {
        if (currentGrade <= 4) {
            countPoorGrades++;
        }
        countAllProblems++;
        sumAllGrades += currentGrade;
        lastProblem = inputText;
        if (countPoorGrades >= amountOfPoorGrades) {
            hasFailed = true;
            break;
        }


        inputText = input[index];
        index++;
        currentGrade = Number(input[index]);
        index++;
    }
    if (hasFailed) {
        console.log(`You need a break, ${countPoorGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(sumAllGrades / countAllProblems).toFixed(2)}`);
        console.log(`Number of problems: ${countAllProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }


}
exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
