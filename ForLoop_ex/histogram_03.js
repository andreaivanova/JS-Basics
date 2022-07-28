function histogram(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalNumbers = 0;
    for (let i = 1; i <= n; i++) {
        let number = Number(input[index]);
        index++;
        totalNumbers++;
        if (number < 200) {
            p1++;
        } else if (number <= 399) {
            p2++;
        } else if (number <= 599) {
            p3++;
        } else if (number <= 799) {
            p4++;
        } else if (number >= 800) {
            p5++;
        }

    }
    let p1Percent = p1 / totalNumbers * 100;
    let p2Percent = p2 / totalNumbers * 100;
    let p3Percent = p3 / totalNumbers * 100;
    let p4Percent = p4 / totalNumbers * 100;
    let p5Percent = p5 / totalNumbers * 100;
    console.log(`${p1Percent.toFixed(2)}%\n${p2Percent.toFixed(2)}%\n${p3Percent.toFixed(2)}%\n${p4Percent.toFixed(2)}%\n${p5Percent.toFixed(2)}%`);


}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])

