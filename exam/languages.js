function languages(input) {
    let name = input[0];
    let age = Number(input[1]);
    let averageGrade = Number(input[2]);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${averageGrade.toFixed(2)}`);
}
languages(['John','15','5.54678']);