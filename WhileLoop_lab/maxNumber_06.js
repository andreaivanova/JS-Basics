function maxNum(input) {
    let index = 0;
    let text = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;
    while (text !== 'Stop') {
        text = Number(text);
        if (maxNum < text) {
            maxNum = text;
        }


        text = input[index];
        index++;
    }
console.log(maxNum);

}
maxNum(["100",

    "99",

    "80",

    "70",

    "Stop"])
maxNum(["-10", "20", "-30", "Stop"])
maxNum(["45", "-20", "7", "99", "Stop"])
maxNum(["999", "Stop"])
maxNum(["-1", "-2", "Stop"])
